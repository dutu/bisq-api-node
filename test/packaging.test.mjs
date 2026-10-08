import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { access, cp, mkdir, mkdtemp, readFile, rename, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const root = fileURLToPath(new URL('../', import.meta.url))
const manifest = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))
const yarnRelease = `.yarn/releases/yarn-${manifest.packageManager.split('@')[1]}.cjs`

for (const [manager, linker] of [['npm', 'pnp'], ['yarn', 'pnp'], ['npm', 'node-modules']]) {
  test(`${manager} packs working ESM and CommonJS entrypoints from a clean ${linker} tree`, async (t) => {
    const temporary = await mkdtemp(path.join(os.tmpdir(), 'bisq-package-test-'))
    t.after(() => rm(temporary, { recursive: true, force: true }))
    const source = path.join(temporary, 'source')
    const consumer = path.join(temporary, 'consumer')
    await mkdir(source)
    await mkdir(consumer)

    // Copy tracked build inputs and the existing offline Yarn dependencies, but no dist/.
    for (const entry of [
      'package.json', '.babelrc', '.npmignore', '.yarnrc.yml', 'yarn.lock',
      '.pnp.cjs', '.pnp.loader.mjs', '.yarn', 'lib', 'proto', 'dev', 'README.md', 'LICENSE',
    ]) {
      await cp(path.join(root, entry), path.join(source, entry), { recursive: true })
    }

    // Plain npm must work without inheriting or manually enabling Yarn's loader.
    const env = { ...process.env }
    delete env.NODE_OPTIONS
    const run = (command, args, options = {}) => execFileSync(command, args, {
      cwd: source, env, encoding: 'utf8', stdio: 'pipe', timeout: 60_000, ...options,
    })
    if (linker === 'node-modules') {
      run(process.execPath, [path.join(source, yarnRelease), 'install', '--immutable'], {
        env: { ...env, YARN_NODE_LINKER: 'node-modules', YARN_ENABLE_NETWORK: '0' },
      })
      // A tracked PnP file may remain after switching package managers.
      await cp(path.join(root, '.pnp.cjs'), path.join(source, '.pnp.cjs'))
    }
    const archive = path.join(temporary, 'package.tgz')
    if (manager === 'npm') {
      run('npm', ['pack', '--pack-destination', temporary])
      await cp(path.join(temporary, `${manifest.name}-${manifest.version}.tgz`), archive)
    } else {
      run(process.execPath, [path.join(source, yarnRelease), 'pack', '--out', archive])
    }

    const files = run('tar', ['-tzf', archive]).trim().split('\n')
    for (const entry of ['lib/bisq.mjs', 'dist/bisq.cjs', 'dist/bisq.cjs.map', 'proto/grpc_services.proto', 'proto/grpc.proto', 'proto/pb.proto']) {
      assert.ok(files.includes(`package/${entry}`), `${entry} must be packed`)
    }
    assert.ok(!files.some((entry) => entry.startsWith('package/dist/cjs/')), 'old build layout must be absent')
    assert.ok(!files.some((entry) => /^package\/(dev|test|\.yarn)\//.test(entry)), 'development files must be excluded')

    const nodeModules = path.join(consumer, 'node_modules')
    // Materialize only runtime dependencies from the copied offline cache.
    // The consumer uses ordinary Node resolution without PnP or Babel.
    run(process.execPath, [path.join(source, yarnRelease), 'workspaces', 'focus', '--production'], {
      env: { ...env, YARN_NODE_LINKER: 'node-modules', YARN_ENABLE_NETWORK: '0' },
    })
    await cp(path.join(source, 'node_modules'), nodeModules, { recursive: true })
    await assert.rejects(access(path.join(nodeModules, '@babel/core')), { code: 'ENOENT' })
    run('tar', ['-xzf', archive, '-C', nodeModules])
    const installed = path.join(nodeModules, manifest.name)
    await rename(path.join(nodeModules, 'package'), installed)
    const packedManifest = JSON.parse(await readFile(path.join(installed, 'package.json'), 'utf8'))
    assert.equal(packedManifest.main, packedManifest.exports['.'].require)
    run(process.execPath, ['--check', path.join(installed, packedManifest.main)])

    const sourceMap = JSON.parse(await readFile(path.join(installed, 'dist/bisq.cjs.map'), 'utf8'))
    assert.equal(sourceMap.file, 'bisq.cjs')
    assert.deepEqual(sourceMap.sources, ['../lib/bisq.mjs'])
    assert.equal(sourceMap.sourcesContent[0], await readFile(path.join(installed, 'lib/bisq.mjs'), 'utf8'))

    for (const mode of ['module', 'commonjs']) {
      const load = mode === 'module'
        ? 'import Bisq from "bisq-api-node";'
        : 'const Bisq = require("bisq-api-node");'
      run(process.execPath, ['--input-type', mode, '-e', `${load}
        const client = new Bisq({ipAddress: "127.0.0.1:1", password: "test"});
        if (typeof Bisq !== "function" || typeof client.wallets.sendBtc !== "function") process.exit(1);
      `], { cwd: consumer })
    }
  })
}
