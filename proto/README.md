### Bisq Protobuffer Definition Files

This directory holds .proto files from the Bisq source code repository.
On this branch, they were copied from the custom Bisq checkout on
`custom/sendbtc-source-addresses/v1.10.9`, commit
`51857cac5d063cbe617693eb7a2bf08bc6f77b63`:

- `grpc.proto`: `proto/src/main/proto/grpc.proto`
- `grpc_services.proto`: `proto-grpc/src/main/proto/grpc_services.proto`
- `pb.proto`: `proto/src/main/proto/pb.proto`

On `custom-send-btc-from-addresses`, `grpc.proto` and `grpc_services.proto` also
include the custom `SendBtcFromAddressesRequest` and `Wallets.SendBtcFromAddresses`
RPC. Preserve these additions when refreshing the upstream definitions until
the matching RPC is available upstream.
