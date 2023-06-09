import * as grpc from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'

const PROTO_PATH = './proto/grpc.proto'

// Load the .proto file and create the gRPC client
const packageDefinition = loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    },
)
const bisqProto = grpc.loadPackageDefinition(packageDefinition).io.bisq.protobuffer

function main() {
    const client = new bisqProto.GetVersion('192.168.1.230:9998', grpc.credentials.createInsecure())
    const metadata = new grpc.Metadata()
    metadata.add('password', '')

    client.GetVersion({}, metadata, function(err, response) {
        console.log('Version:', response.message)
    })
}

main()
