import fs from 'fs/promises';
import protobuf from 'protobufjs';
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROTO_PATH = path.join(__dirname, '../proto/grpc.proto')

async function generateCodeFromRoot() {
  const root = await protobuf.load(PROTO_PATH);

  let output = '';
  traverse(root, (name, methods) => {
    output += `${lowerFirstChar(name)} = {\n`;
    for (const methodName of methods) {
      output += `  ${lowerFirstChar(methodName)}: (parameters) => {\n`;
      output += `    return this.#callRPCMethod('${name}', '${methodName}', parameters)\n`;
      output += `  },\n`;
    }
    output += '}\n\n';
  });

  await fs.writeFile('services.txt', output);
  console.log('The file has been saved!');
}

function traverse(node, onService) {
  for (const [name, value] of Object.entries(node.nested || {})) {
    if (value instanceof protobuf.Service) {
      const methods = Object.keys(value.methods);
      onService(name, methods);
    } else if (value instanceof protobuf.Namespace) {
      traverse(value, onService);
    }
  }
}

function lowerFirstChar(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

generateCodeFromRoot().catch(console.error);
