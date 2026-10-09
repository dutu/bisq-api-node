bisq-api-node
=============

**bisq-api-node** is a Node.js wrapper that simplifies the process of interacting with both local and remote Bisq API endpoints.

The Bisq API is built on the gRPC framework.<br> 
**bisq-api-node** abstracts away the complexities of gRPC communication. Developers can interact with the Bisq API in a simplified and intuitive manner, without the need to directly handle the intricacies of the underlying gRPC implementation.

The functionality of **bisq-api-node** is organized in a single class, making it straightforward to use.


### Contents
* [Install](#install)
* [Usage](#usage)
    * [Constructor](#constructor)
    * [Methods](#methods)
    * [Custom daemon RPC reference](CUSTOM_RPC.md)
    * [Requirements for target Bisq API Daemon ](#requirements-for-target-bisq-api-daemon )


# Install

```shell
npm install --save bisq-api-node
```
or
```shell
yarn add bisq-api-node
```

Node.js 22 or later is required.

# Usage

Import the class using ES modules:

```js
import Bisq from 'bisq-api-node'
```

or CommonJS:

```js
const Bisq = require('bisq-api-node')
```

## Constructor

* `new Bisq({ ipAddress, password })`

You must supply the IP address of your Bisq daemon and the API password.

Example:

```js
const bisq = new Bisq({ ipAddress: '192.168.1.230:9998', password: 'myapiPassword' })
```


## Methods

Available RPC Methods are described in the official [Bisq gRPC API reference documentation](https://bisq-network.github.io/slate/#introduction).

The custom daemon extensions `SendBtcFromAddresses` and `CloneOffer` are documented
in the [custom gRPC API reference](CUSTOM_RPC.md), with request/response tables,
direct gRPC examples, and validation rules.

A method can be simply accessed using the format `.serviceName.methodName`.

For example, you would call gRPC method `GetMarketPrice` of service `Price` like this:  `bisq.price.getMarketPrice({ currency_code: 'usd' })`.
> Note that both the service name and method name are starting with a small letter.

All methods accept one object parameter, which is used to pass all gRPC request parameters for the API call.

All methods return a promise.

Example:
```js
result  = await bisq.offers.getOffers({ direction: 'BUY', currency_code: 'xmr'})
console.log(result)
```


### Restricted BTC withdrawals (custom daemon)

This branch exposes `bisq.wallets.sendBtcFromAddresses(parameters)` for a custom
daemon implementing `Wallets.SendBtcFromAddresses`:

```js
const result = await bisq.wallets.sendBtcFromAddresses({
  address: destinationAddress,
  amount: '0.02',
  tx_fee_rate: '10',
  memo: 'Personal withdrawal',
  source_addresses: [sourceAddressA, sourceAddressB],
})
```

`source_addresses` must contain at least one eligible wallet address. The daemon
validates every source, deduplicates addresses, and restricts inputs to that set.
It may use a subset of the selected addresses when sufficient. Missing or empty
sources, blank strings, unknown addresses, and ineligible wallet addresses must
fail with `INVALID_ARGUMENT`. Insufficient selected funds must fail even when
other wallet addresses have enough BTC.

`amount` includes the transaction fee; the destination receives the amount minus
the fee, subject to existing dust handling. `tx_fee_rate` and `memo` are optional.
The memo is wallet metadata and is not written on-chain. The immediate reply may
omit it. The method returns the same reply shape as `sendBtc`.

Wallet eligibility and transaction input restrictions are enforced by the
daemon. This client forwards the supplied list without discovering, expanding,
or filtering source addresses. `getFundingAddresses()` is not a complete list
of eligible withdrawal sources.

Errors reject the returned promise with the original gRPC error. A daemon
without this RPC returns `UNIMPLEMENTED`. The client never substitutes `sendBtc`
after any failure. Ordinary `sendBtc` remains unchanged.

### Clone an open offer (custom daemon)

`bisq.offers.cloneOffer(parameters)` requires a custom daemon implementing
`Offers.CloneOffer`. Clone one of your node's own open v1 protocol offers:

```js
const { offer } = await bisq.offers.cloneOffer({ source_offer_id: sourceOfferId })

// Switch to a fixed price with an explicit override.
const { offer: fixedPriceClone } = await bisq.offers.cloneOffer({
  source_offer_id: sourceOfferId,
  use_market_based_price: false,
  price: '45000', // Fiat price; altcoin offers use a BTC price string.
  trigger_price: '0',
})
```

The clone receives a new ID and reuses the source maker-fee transaction, amount,
minimum amount and security deposits. BSQ swap offers cannot be cloned.
Optional overrides are `price`, `use_market_based_price`,
`market_price_margin_pct`, `trigger_price`, and `payment_account_id`. Omit an
override to inherit the source value under the daemon's pricing rules; explicit
`false` and numeric `0` are sent as overrides. Prices and triggers are strings.
The payment account must be compatible and support the source amount.

A fixed-price clone of a market-priced source requires an explicit `price`.
A fixed `price` cannot accompany market pricing, and `market_price_margin_pct`
cannot accompany fixed pricing. Fixed-price clones use a zero trigger.
Market-priced clones inherit a market-priced source's trigger when omitted;
otherwise they use zero. Send `trigger_price: '0'` to clear it. The daemon
validates prices, triggers and market-price availability.

The reply is `{ offer }` with the placed offer's actual activation state and
trigger price. Errors reject the promise with the original gRPC error, including
`UNIMPLEMENTED` when the daemon lacks this RPC. The client does not retry cloning
through `createOffer`.

See [DEVELOPMENT.md](DEVELOPMENT.md) to install the private `custom-api` branch
from GitHub.

## Requirements for target Bisq API Daemon

* Java JDK 21

* Current Bisq API Daemon installed and running

> Never Run API Daemon and Bisq GUI On Same Host At Same Time.
> 
> The API daemon and the GUI share the same default wallet and connection ports. Beyond inevitable failures due to fighting over the wallet and ports, doing so will probably corrupt your wallet. Before starting the API daemon, make sure your GUI is shut down, and vice-versa. Please back up your mainnet wallet early and often with the GUI.


### Running Bisq API daemon

Start Bisq API Daemon:
```shell
# Shutdown Bisq GUI
kill -15 $(pgrep Bisq)

# Start Bisq API daemon
java -jar daemon.jar --apiPort=9998 --apiPassword=becareful
```
