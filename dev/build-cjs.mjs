import { transformFileAsync } from '@babel/core'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const outputDirectory = path.join(root, 'dist')

// CommonJS has __filename instead of import.meta.url. Keep the ESM source intact.
const commonJsImportMeta = ({ types: t }) => ({
  visitor: {
    MemberExpression(nodePath) {
      const { node } = nodePath
      if (
        t.isMetaProperty(node.object) &&
        node.object.meta.name === 'import' &&
        node.object.property.name === 'meta' &&
        !node.computed &&
        t.isIdentifier(node.property, { name: 'url' })
      ) {
        nodePath.replaceWith(t.memberExpression(
          t.callExpression(
            t.memberExpression(
              t.callExpression(t.identifier('require'), [t.stringLiteral('node:url')]),
              t.identifier('pathToFileURL'),
            ),
            [t.identifier('__filename')],
          ),
          t.identifier('href'),
        ))
      }
    },
  },
})

const { code, map } = await transformFileAsync(path.join(root, 'lib/bisq.mjs'), {
  configFile: path.join(root, '.babelrc'),
  babelrc: false,
  plugins: [commonJsImportMeta],
  sourceFileName: '../lib/bisq.mjs',
})

// Remove stale output from the former dist/cjs layout before packing.
await rm(outputDirectory, { recursive: true, force: true })
await mkdir(outputDirectory, { recursive: true })
await writeFile(path.join(outputDirectory, 'bisq.cjs'), `${code}\n//# sourceMappingURL=bisq.cjs.map\n`)
await writeFile(path.join(outputDirectory, 'bisq.cjs.map'), JSON.stringify({ ...map, file: 'bisq.cjs' }))
