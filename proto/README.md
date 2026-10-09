### Bisq Protobuffer Definition Files

This directory holds .proto files from the Bisq source code repository.
On this branch, they were copied from the custom Bisq checkout on
`custom/api/v1.10.9`, commit
`e0aa6b6d7f8be54ff960a7b5f8621772749f00bb`:

- `grpc.proto`: `proto/src/main/proto/grpc.proto`
- `grpc_services.proto`: `proto-grpc/src/main/proto/grpc_services.proto`
- `pb.proto`: `proto/src/main/proto/pb.proto`

On `custom-api`, `grpc.proto` and `grpc_services.proto` include the custom
`Wallets.SendBtcFromAddresses` and `Offers.CloneOffer` RPCs and their messages.
`CloneOfferRequest` uses proto3 optional fields: omitted overrides inherit source
values under the daemon's pricing rules, while explicit `false` and `0` retain
their presence. Preserve these additions when refreshing the upstream
definitions until the matching RPCs are available upstream.
