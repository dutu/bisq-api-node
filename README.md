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
    * [Requirements for target Bisq API Daemon ](#requirements-for-target-bisq-api-daemon )


# Install

```shell
npm install --save bisq-api-node
```
or
```shell
yarn add bisq-api-node
```

# Usage

## Constructor

* `new Bisq({ ipAddress, password })`

You must supply the IP address of your Bisq daemon and the API password.

Example:

```js
const bisq = new Bisq({ ipAddress: '192.168.1.230:9998', password: 'myapiPassword' })
```


## Methods

Available RPC Methods are described in the official [Bisq gRPC API reference documentation](https://bisq-network.github.io/slate/#introduction).

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


## Requirements for target Bisq API Daemon 

* Java JDK 11 or 15

* Bisq API Daemon installed and running 

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
