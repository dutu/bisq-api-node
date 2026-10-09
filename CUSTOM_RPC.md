# Custom Bisq daemon gRPC API reference

This reference documents the `SendBtcFromAddresses` and `CloneOffer` extensions
used by the private `custom-api` branch. It follows the request/response layout
of the [Bisq RPC reference](https://bisq-network.github.io/slate/#rpc-method-createoffer).
Both methods require a matching custom daemon; a daemon without the requested
method returns `UNIMPLEMENTED`.

The contracts are defined in [grpc_services.proto](proto/grpc_services.proto)
and [grpc.proto](proto/grpc.proto). Daemon provenance is recorded in
[proto/README.md](proto/README.md). These descriptions were checked against
`GrpcWalletsService`, `CoreWalletsService`, `BtcWalletService`,
`GrpcOffersService`, `CoreOffersService`, and `OpenOfferManager` in that daemon.

## Contents

- [Authentication and examples](#authentication-and-examples)
- [RPC Method SendBtcFromAddresses](#rpc-method-sendbtcfromaddresses)
- [RPC Method CloneOffer](#rpc-method-cloneoffer)
- [Common errors](#common-errors)

## Authentication and examples

Send the daemon's API password as gRPC metadata with the key `password`.
Both calls require initialized wallets and network connectivity. If the wallets
are encrypted, unlock them through `Wallets.UnlockWallet` first.

The [grpcurl](https://github.com/fullstorydev/grpcurl#invoking-rpcs) examples below
run from this repository's root and use its custom protobuf files, so server
reflection is unnecessary. Replace the password, addresses, source offer ID,
and endpoint with your values. `-plaintext` matches the daemon's insecure gRPC
endpoint. Example addresses and IDs are placeholders.

Field names in the tables are protobuf names. `grpcurl` JSON examples use
camelCase; the Node.js wrapper requires the snake_case names from the tables.
Protobuf `uint64` values are represented as decimal strings in JSON and in this
Node.js wrapper. JSON serializers may omit fields with default values.

For Node.js examples, initialize a client once:

```js
import Bisq from 'bisq-api-node'

const bisq = new Bisq({ ipAddress: '127.0.0.1:9998', password: 'my-api-password' })
```

See [DEVELOPMENT.md](DEVELOPMENT.md) for installation from the `custom-api`
GitHub branch.

## RPC Method SendBtcFromAddresses

### Unary RPC

Send BTC to an external address using transaction inputs restricted to an
explicit list of wallet source addresses.

| Property | Value |
| --- | --- |
| Service | `io.bisq.protobuffer.Wallets` |
| Method | `SendBtcFromAddresses` |
| Full gRPC path | `/io.bisq.protobuffer.Wallets/SendBtcFromAddresses` |
| Request | `SendBtcFromAddressesRequest` |
| Response | `SendBtcReply` |
| Node.js method | `bisq.wallets.sendBtcFromAddresses(parameters)` |

```proto
rpc SendBtcFromAddresses (SendBtcFromAddressesRequest) returns (SendBtcReply) {}
```

### gRPC Request: SendBtcFromAddressesRequest

| Name | Field | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | Yes | Destination Bitcoin address for the daemon's network. |
| `amount` | 2 | `string` | Yes | BTC withdrawal amount including the miner fee, for example `"0.02"`. |
| `tx_fee_rate` | 3 | `string` | No | Integer satoshis per virtual byte, for example `"10"`. Omission or `""` uses the wallet's configured withdrawal fee preference or fee service. |
| `memo` | 4 | `string` | No | Local wallet transaction memo. Omission or `""` leaves it unset. It is not written on-chain. |
| `source_addresses` | 5 | `repeated string` | Yes | At least one eligible, funded wallet source address. |

The required column describes daemon validation; proto3 does not declare these
fields as `required`.

### Withdrawal rules

The daemon validates every source before estimating fees or sending funds.
Missing or empty lists, blank entries, unknown addresses, and addresses outside
the eligible set are rejected. Addresses are compared as supplied; they are not
trimmed or repaired. Duplicate entries are deduplicated.

The eligible set consists of positive-balance wallet entries in the `AVAILABLE`,
`TRADE_PAYOUT`, `ARBITRATOR`, and `OFFER_FUNDING` contexts. `GetFundingAddresses`
does not enumerate this entire set. Eligibility does not guarantee that all
funds at an address are currently spendable.

Coin selection may use a subset of the selected addresses, but cannot use other
wallet addresses to cover a shortfall. Insufficient selected funds fail even if
the rest of the wallet has sufficient BTC. Ordinary `SendBtc` remains a separate
RPC; clients must not fall back to it after a restricted withdrawal fails.

The destination receives `amount` minus the fee under the existing `SendBtc`
dust rules. Dust may be added to the fee. Any change follows the wallet's normal
change handling; `source_addresses` restricts inputs, not change destinations.

### gRPC Response: SendBtcReply

| Name | Field | Type | Description |
| --- | --- | --- | --- |
| `tx_info` | 1 | `TxInfo` | Summary of the published Bitcoin transaction, using the same reply contract as `SendBtc`. |

`TxInfo` fields:

| Name | Type | Description |
| --- | --- | --- |
| `tx_id` | `string` | Bitcoin transaction ID. |
| `input_sum` | `uint64` | Total input value in satoshis. |
| `output_sum` | `uint64` | Total output value in satoshis, including change. |
| `fee` | `uint64` | Miner fee in satoshis. |
| `size` | `int32` | Serialized transaction size in bytes; this is not virtual size. |
| `is_pending` | `bool` | Whether the transaction is pending confirmation. |
| `memo` | `string` | Wallet memo, which may be absent or empty in the immediate reply. |

### Call examples

```shell
grpcurl -plaintext \
  -import-path ./proto -proto grpc_services.proto \
  -H 'password: my-api-password' \
  -d '{
    "address": "DESTINATION_ADDRESS",
    "amount": "0.02",
    "txFeeRate": "10",
    "memo": "Personal withdrawal",
    "sourceAddresses": ["SOURCE_ADDRESS_A", "SOURCE_ADDRESS_B"]
  }' \
  127.0.0.1:9998 io.bisq.protobuffer.Wallets/SendBtcFromAddresses
```

```js
const { tx_info } = await bisq.wallets.sendBtcFromAddresses({
  address: 'DESTINATION_ADDRESS',
  amount: '0.02',
  tx_fee_rate: '10',
  memo: 'Personal withdrawal',
  source_addresses: ['SOURCE_ADDRESS_A', 'SOURCE_ADDRESS_B'],
})

console.log(tx_info.tx_id, tx_info.fee)
```

### Method errors

Invalid source lists produce `INVALID_ARGUMENT`. Invalid transfer amounts and
malformed fee rates can also produce `INVALID_ARGUMENT`. Fee estimation,
insufficient spendable funds, and broadcasting can fail with other statuses;
inspect the returned status and details. In this daemon, wrapped underlying
exceptions can map to `UNKNOWN`, so insufficient funds do not have a guaranteed
single status code.

## RPC Method CloneOffer

### Unary RPC

Clone one of this node's own open v1 protocol offers and place the clone, reusing
the source's maker-fee transaction. BSQ swap offers cannot be cloned.

| Property | Value |
| --- | --- |
| Service | `io.bisq.protobuffer.Offers` |
| Method | `CloneOffer` |
| Full gRPC path | `/io.bisq.protobuffer.Offers/CloneOffer` |
| Request | `CloneOfferRequest` |
| Response | `CloneOfferReply` |
| Node.js method | `bisq.offers.cloneOffer(parameters)` |

```proto
rpc CloneOffer (CloneOfferRequest) returns (CloneOfferReply) {}
```

### gRPC Request: CloneOfferRequest

| Name | Field | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `source_offer_id` | 1 | `string` | Yes | ID of this node's own open v1 offer. |
| `price` | 2 | `optional string` | No | Fixed-price override. Fiat offers use a fiat price per BTC, for example `"45000"`; altcoin offers use a BTC price per altcoin, for example `"0.00005"`. |
| `use_market_based_price` | 3 | `optional bool` | No | `true` selects market pricing; `false` selects fixed pricing. Omission inherits the source mode. |
| `market_price_margin_pct` | 4 | `optional double` | No | Market-price margin in percent: `2.5` means 2.5%. Omission inherits the source margin; explicit `0` overrides it. |
| `trigger_price` | 5 | `optional string` | No | Price at which a market-priced offer is disabled. `"0"` clears it. Omission follows the trigger rules below. |
| `payment_account_id` | 6 | `optional string` | No | Replacement payment account. Omission uses the source account. |

### Override and placement rules

Presence matters for all five optional fields. Omit a field to inherit under
the rules below. Explicit `false`, numeric `0`, or `"0"` is an override. Empty
strings are also present and go through validation; they do not request
inheritance. Generated protobuf clients should leave the corresponding field
unset when inheriting.

| Effective pricing mode | Fixed price | Margin | Trigger when omitted |
| --- | --- | --- | --- |
| Fixed, from a fixed-priced source | Inherit source price or supply `price`. | A margin override is rejected. | Zero. |
| Fixed, from a market-priced source | An explicit `price` is required. | A margin override is rejected. | Zero. |
| Market, from a market-priced source | A `price` override is rejected. | Inherit source margin or override it. | Inherit source trigger. |
| Market, from a fixed-priced source | A `price` override is rejected. | Inherit stored source margin or override it. | Zero. |

Fixed prices must be positive. Margins must be finite. Market pricing requires
a recent external price and is rejected for HalCash accounts. If market pricing
is unavailable, the daemon rejects the clone rather than switching its mode.

Explicit triggers must be nonnegative, fit the currency's precision and the
daemon's integer representation, and, when nonzero, be on the valid side of
the current market price for the offer's direction and currency. Fixed-price
results reject nonzero triggers. Inherited market triggers are validated too.

The payment account must exist, be compatible with the resulting offer, and
have a trade limit that supports the source amount. BSQ swap accounts are
rejected. The clone keeps the source direction, currency, BTC amount, minimum
amount, security deposits, maker-fee transaction and fee amounts; it receives
a new ID and creation date. These inherited fields are not request overrides.

A maker-fee group can contain at most ten open offers, counting the original
if it is still open. A clone is placed deactivated if an active offer already
shares its maker-fee transaction, payment method, and currency pair. Otherwise
it can be activated. The source's activation state is not simply copied.

### gRPC Response: CloneOfferReply

| Name | Field | Type | Description |
| --- | --- | --- | --- |
| `offer` | 1 | `OfferInfo` | The placed clone with its actual activation state and trigger. |

The full `OfferInfo` contract is in [grpc.proto](proto/grpc.proto).
Useful response fields include:

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | New offer ID. |
| `offer_fee_payment_tx_id` | `string` | Maker-fee transaction shared with the source. |
| `amount`, `min_amount` | `uint64` | Inherited BTC amounts in satoshis. |
| `price` | `string` | Resulting offer price. |
| `use_market_based_price` | `bool` | Resulting pricing mode. |
| `market_price_margin_pct` | `double` | Resulting margin in percent. |
| `payment_account_id` | `string` | Selected payment account. |
| `trigger_price` | `string` | Actual trigger, zero for fixed-price clones. |
| `is_activated` | `bool` | Whether the placed clone is enabled. A successful call may return `false`. |
| `is_my_offer` | `bool` | `true` for the node's clone. |
| `is_my_pending_offer` | `bool` | `false`; the reply is built after placement. |

### Call examples

Inherit source settings, subject to the pricing and trigger rules:

```shell
grpcurl -plaintext \
  -import-path ./proto -proto grpc_services.proto \
  -H 'password: my-api-password' \
  -d '{"sourceOfferId": "SOURCE_OFFER_ID"}' \
  127.0.0.1:9998 io.bisq.protobuffer.Offers/CloneOffer
```

Switch a fiat offer to a fixed price and clear its trigger:

```shell
grpcurl -plaintext \
  -import-path ./proto -proto grpc_services.proto \
  -H 'password: my-api-password' \
  -d '{
    "sourceOfferId": "SOURCE_OFFER_ID",
    "useMarketBasedPrice": false,
    "price": "45000",
    "triggerPrice": "0"
  }' \
  127.0.0.1:9998 io.bisq.protobuffer.Offers/CloneOffer
```

Equivalent Node.js calls:

```js
const { offer } = await bisq.offers.cloneOffer({ source_offer_id: 'SOURCE_OFFER_ID' })

const { offer: fixedPriceClone } = await bisq.offers.cloneOffer({
  source_offer_id: 'SOURCE_OFFER_ID',
  use_market_based_price: false,
  price: '45000',
  trigger_price: '0',
})

console.log(fixedPriceClone.id, fixedPriceClone.is_activated)
```

### Method errors

`NOT_FOUND` indicates a missing or non-owned open source. `INVALID_ARGUMENT`
covers unsupported BSQ swaps, invalid payment accounts or trade limits,
contradictory pricing overrides, and invalid prices or triggers. `UNAVAILABLE`
covers missing recent market pricing or an unavailable inherited fixed price.
Placement errors reported as messages, including the maker-fee group limit,
map to `UNKNOWN`. Clients should not substitute `CreateOffer` after a failure:
it has a different maker-fee and offer-creation contract.

## Common errors

| Status | Meaning |
| --- | --- |
| `UNAUTHENTICATED` | Missing or incorrect `password` metadata. |
| `FAILED_PRECONDITION` | Encrypted wallets are locked. |
| `UNAVAILABLE` | Wallets/network are not initialized or another required resource is unavailable. |
| `UNIMPLEMENTED` | The daemon does not expose the requested custom RPC. |
| `PERMISSION_DENIED` | The daemon's configured RPC call rate has been exceeded. |
| `UNKNOWN` | A placement, wallet, or underlying exception was mapped through the daemon's generic error handler. |

Transport errors such as `DEADLINE_EXCEEDED` can also occur. The Node.js wrapper
uses a ten-second deadline and rejects its promise with the original gRPC
error, including status, details and metadata. It validates parameter names
locally; unknown keys throw before any RPC is sent.

The referenced daemon defaults to one `SendBtcFromAddresses` call per second
and ten `CloneOffer` calls per second. Custom rate-meter configuration can
replace these defaults, so deployed limits may differ.
