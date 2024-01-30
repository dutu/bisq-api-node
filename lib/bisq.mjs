import * as grpc from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROTO_PATH = path.join(__dirname, '../proto/grpc.proto')

export default class Bisq {
  #metadata
  #ipAddress
  #clients = {}
  #bisqProto
  constructor({ ipAddress, password }) {
    // Load the protobuf package definition and access the 'io.bisq.protobuffer' namespace
    const packageDefinition = loadSync(PROTO_PATH, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    })
    this.#bisqProto = grpc.loadPackageDefinition(packageDefinition).io.bisq.protobuffer

    // Token-based authentication, the token should be sent as a metadata item with each request
    this.#metadata = new grpc.Metadata()
    this.#metadata.add('password', password)

    // Store the IP address
    this.#ipAddress = ipAddress
  }

  #callRPCMethod(service, method, parameters = {}) {
    // Create a new gRPC client instance for the given service if it doesn't exist already
    this.#clients[service] ??= new this.#bisqProto[service](this.#ipAddress, grpc.credentials.createInsecure())
    return new Promise((resolve, reject) => {
      // Invoke the specified gRPC method on the client for the given service
      this.#clients[service][method](parameters, this.#metadata, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  /**
   * Define the objects to encapsulate the RPC methods for a specific service
   * For each object define the API methods to invoke the underlying #callRPCMethod with the appropriate service name and RPC method
   */

  disputeAgents = {
    registerDisputeAgent: (parameters) => {
      return this.#callRPCMethod('DisputeAgents', 'RegisterDisputeAgent', parameters)
    },
  }

  help = {
    getMethodHelp: (parameters) => {
      return this.#callRPCMethod('Help', 'GetMethodHelp', parameters)
    },
  }

  offers = {
    getOfferCategory: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetOfferCategory', parameters)
    },
    getBsqSwapOffer: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetBsqSwapOffer', parameters)
    },
    getOffer: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetOffer', parameters)
    },
    getMyBsqSwapOffer: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetMyBsqSwapOffer', parameters)
    },
    getMyOffer: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetMyOffer', parameters)
    },
    getBsqSwapOffers: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetBsqSwapOffers', parameters)
    },
    getOffers: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetOffers', parameters)
    },
    getMyBsqSwapOffers: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetMyBsqSwapOffers', parameters)
    },
    getMyOffers: (parameters) => {
      return this.#callRPCMethod('Offers', 'GetMyOffers', parameters)
    },
    createBsqSwapOffer: (parameters) => {
      return this.#callRPCMethod('Offers', 'CreateBsqSwapOffer', parameters)
    },
    createOffer: (parameters) => {
      return this.#callRPCMethod('Offers', 'CreateOffer', parameters)
    },
    editOffer: (parameters) => {
      return this.#callRPCMethod('Offers', 'EditOffer', parameters)
    },
    cancelOffer: (parameters) => {
      return this.#callRPCMethod('Offers', 'CancelOffer', parameters)
    },
  }

  paymentAccounts = {
    createPaymentAccount: (parameters) => {
      return this.#callRPCMethod('PaymentAccounts', 'CreatePaymentAccount', parameters)
    },
    getPaymentAccounts: (parameters) => {
      return this.#callRPCMethod('PaymentAccounts', 'GetPaymentAccounts', parameters)
    },
    getPaymentMethods: (parameters) => {
      return this.#callRPCMethod('PaymentAccounts', 'GetPaymentMethods', parameters)
    },
    getPaymentAccountForm: (parameters) => {
      return this.#callRPCMethod('PaymentAccounts', 'GetPaymentAccountForm', parameters)
    },
    createCryptoCurrencyPaymentAccount: (parameters) => {
      return this.#callRPCMethod('PaymentAccounts', 'CreateCryptoCurrencyPaymentAccount', parameters)
    },
    getCryptoCurrencyPaymentMethods: (parameters) => {
      return this.#callRPCMethod('PaymentAccounts', 'GetCryptoCurrencyPaymentMethods', parameters)
    },
  }

  price = {
    getMarketPrice: (parameters) => {
      return this.#callRPCMethod('Price', 'GetMarketPrice', parameters)
    },
    getAverageBsqTradePrice: (parameters) => {
      return this.#callRPCMethod('Price', 'GetAverageBsqTradePrice', parameters)
    },
  }

  shutdownServer = {
    stop: (parameters) => {
      return this.#callRPCMethod('ShutdownServer', 'Stop', parameters)
    },
  }

  trades = {
    getTrade: (parameters) => {
      return this.#callRPCMethod('Trades', 'GetTrade', parameters)
    },
    getTrades: (parameters) => {
      return this.#callRPCMethod('Trades', 'GetTrades', parameters)
    },
    takeOffer: (parameters) => {
      return this.#callRPCMethod('Trades', 'TakeOffer', parameters)
    },
    confirmPaymentStarted: (parameters) => {
      return this.#callRPCMethod('Trades', 'ConfirmPaymentStarted', parameters)
    },
    confirmPaymentReceived: (parameters) => {
      return this.#callRPCMethod('Trades', 'ConfirmPaymentReceived', parameters)
    },
    closeTrade: (parameters) => {
      return this.#callRPCMethod('Trades', 'CloseTrade', parameters)
    },
    failTrade: (parameters) => {
      return this.#callRPCMethod('Trades', 'FailTrade', parameters)
    },
    unFailTrade: (parameters) => {
      return this.#callRPCMethod('Trades', 'UnFailTrade', parameters)
    },
    withdrawFunds: (parameters) => {
      return this.#callRPCMethod('Trades', 'WithdrawFunds', parameters)
    },
  }

  wallets = {
    getNetwork: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetNetwork', parameters)
    },
    getDaoStatusRequest: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetDaoStatusRequest', parameters)
    },
    getBalances: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetBalances', parameters)
    },
    getAddressBalance: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetAddressBalance', parameters)
    },
    getUnusedBsqAddress: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetUnusedBsqAddress', parameters)
    },
    sendBsq: (parameters) => {
      return this.#callRPCMethod('Wallets', 'SendBsq', parameters)
    },
    sendBtc: (parameters) => {
      return this.#callRPCMethod('Wallets', 'SendBtc', parameters)
    },
    verifyBsqSentToAddress: (parameters) => {
      return this.#callRPCMethod('Wallets', 'VerifyBsqSentToAddress', parameters)
    },
    getTxFeeRate: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetTxFeeRate', parameters)
    },
    setTxFeeRatePreference: (parameters) => {
      return this.#callRPCMethod('Wallets', 'SetTxFeeRatePreference', parameters)
    },
    unsetTxFeeRatePreference: (parameters) => {
      return this.#callRPCMethod('Wallets', 'UnsetTxFeeRatePreference', parameters)
    },
    getTransactions: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetTransactions', parameters)
    },
    getTransaction: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetTransaction', parameters)
    },
    getFundingAddresses: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetFundingAddresses', parameters)
    },
    setWalletPassword: (parameters) => {
      return this.#callRPCMethod('Wallets', 'SetWalletPassword', parameters)
    },
    removeWalletPassword: (parameters) => {
      return this.#callRPCMethod('Wallets', 'RemoveWalletPassword', parameters)
    },
    lockWallet: (parameters) => {
      return this.#callRPCMethod('Wallets', 'LockWallet', parameters)
    },
    unlockWallet: (parameters) => {
      return this.#callRPCMethod('Wallets', 'UnlockWallet', parameters)
    },
  }

  getVersion = {
    getVersion: (parameters) => {
      return this.#callRPCMethod('GetVersion', 'GetVersion', parameters)
    },
  }
}
