import * as grpc from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROTO_PATH = path.join(__dirname, '../proto/grpc_services.proto')

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

    // Password authentication, sent as metadata with each request
    this.#metadata = new grpc.Metadata()
    this.#metadata.add('password', password)

    // Store the IP address
    this.#ipAddress = ipAddress
  }

  #validateParameters(service, method, parameters) {
    // Access the array of field descriptors for the request type
    const fieldDescriptors = this.#bisqProto[service].service[method].requestType.type.field

    // Extract the 'name' from each field descriptor as these are the expected parameter keys
    const expectedKeys = fieldDescriptors.map((field) => field.name)

    const extraKeys = Object.keys(parameters).filter((key) => !expectedKeys.includes(key))
    if (extraKeys.length > 0) {
      const expectedKeysMessage = expectedKeys.length > 0
        ? `Expected parameters: ${expectedKeys.join(", ")}`
        : "No parameters expected"
      throw new Error(`Unexpected parameters for method ${service}.${method}: ${extraKeys.join(", ")}. ${expectedKeysMessage}`)
    }
  }

  #callRPCMethod(service, method, parameters = {}) {
    this.#validateParameters(service, method, parameters)

    // Create a new gRPC client instance for the given service if it doesn't exist already
    this.#clients[service] ??= new this.#bisqProto[service](this.#ipAddress, grpc.credentials.createInsecure())
    return new Promise((resolve, reject) => {
      const options = {
        deadline: new Date(Date.now() + 10_000),
      }

      // Invoke the specified gRPC method on the client for the given service
      this.#clients[service][method](parameters, this.#metadata, options, (err, response) => {
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
    confirmPaymentStartedXmr: (parameters) => {
      return this.#callRPCMethod('Trades', 'ConfirmPaymentStartedXmr', parameters)
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
    getDaoStatus: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetDaoStatus', parameters)
    },
    getWalletSyncStatus: (parameters) => {
      return this.#callRPCMethod('Wallets', 'GetWalletSyncStatus', parameters)
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

  dao = {
    getCycleInfo: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetCycleInfo', parameters)
    },
    getCycles: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetCycles', parameters)
    },
    getProposals: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetProposals', parameters)
    },
    getBallots: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetBallots', parameters)
    },
    getMyVotes: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetMyVotes', parameters)
    },
    getVoteResults: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetVoteResults', parameters)
    },
    getBondedRoles: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetBondedRoles', parameters)
    },
    getDaoParamValue: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetDaoParamValue', parameters)
    },
    createCompensationProposal: (parameters) => {
      return this.#callRPCMethod('Dao', 'CreateCompensationProposal', parameters)
    },
    createReimbursementProposal: (parameters) => {
      return this.#callRPCMethod('Dao', 'CreateReimbursementProposal', parameters)
    },
    createChangeParamProposal: (parameters) => {
      return this.#callRPCMethod('Dao', 'CreateChangeParamProposal', parameters)
    },
    createBondedRoleProposal: (parameters) => {
      return this.#callRPCMethod('Dao', 'CreateBondedRoleProposal', parameters)
    },
    createConfiscateBondProposal: (parameters) => {
      return this.#callRPCMethod('Dao', 'CreateConfiscateBondProposal', parameters)
    },
    createGenericProposal: (parameters) => {
      return this.#callRPCMethod('Dao', 'CreateGenericProposal', parameters)
    },
    createRemoveAssetProposal: (parameters) => {
      return this.#callRPCMethod('Dao', 'CreateRemoveAssetProposal', parameters)
    },
    setVote: (parameters) => {
      return this.#callRPCMethod('Dao', 'SetVote', parameters)
    },
    publishBlindVote: (parameters) => {
      return this.#callRPCMethod('Dao', 'PublishBlindVote', parameters)
    },
    getRawTransaction: (parameters) => {
      return this.#callRPCMethod('Dao', 'GetRawTransaction', parameters)
    },
  }
}
