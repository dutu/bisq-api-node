// source: grpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var pb_pb = require('./pb_pb.js');
goog.object.extend(proto, pb_pb);
goog.exportSymbol('proto.io.bisq.protobuffer.AddressBalanceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.AvailabilityResultWithDescription', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.AverageBsqTradePrice', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BalancesInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BsqBalanceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BsqSwapTradeInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BtcBalanceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CancelOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CancelOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CloseTradeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CloseTradeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentStartedReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ContractInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateBsqSwapOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreatePaymentAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreatePaymentAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.EditOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.EditOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.EditOfferRequest.EditType', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.FailTradeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.FailTradeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetAddressBalanceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetAddressBalanceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBalancesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBalancesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBsqSwapOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBsqSwapOffersReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBsqSwapOffersRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetFundingAddressesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetFundingAddressesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMethodHelpReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMethodHelpRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOffersReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOffersRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetNetworkReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetNetworkRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferCategoryReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferCategoryReply.OfferCategory', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferCategoryRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOffersReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOffersRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountFormReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountFormRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentMethodsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentMethodsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradesRequest.Category', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTransactionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTransactionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTxFeeRateReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTxFeeRateRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetUnusedBsqAddressReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetVersionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetVersionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.LockWalletReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.LockWalletRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPriceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPriceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.OfferInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.PaymentAccountPayloadInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RegisterDisputeAgentReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RegisterDisputeAgentRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RemoveWalletPasswordReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RemoveWalletPasswordRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendBsqReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendBsqRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendBtcReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendBtcRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetWalletPasswordReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetWalletPasswordRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TakeOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TakeOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TradeInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TxFeeRateInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TxInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnFailTradeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnFailTradeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnlockWalletReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnlockWalletRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.WithdrawFundsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.WithdrawFundsRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RegisterDisputeAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.displayName = 'proto.io.bisq.protobuffer.RegisterDisputeAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RegisterDisputeAgentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply.displayName = 'proto.io.bisq.protobuffer.RegisterDisputeAgentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMethodHelpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMethodHelpRequest.displayName = 'proto.io.bisq.protobuffer.GetMethodHelpRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMethodHelpReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMethodHelpReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMethodHelpReply.displayName = 'proto.io.bisq.protobuffer.GetMethodHelpReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOfferCategoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOfferCategoryRequest.displayName = 'proto.io.bisq.protobuffer.GetOfferCategoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOfferCategoryReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOfferCategoryReply.displayName = 'proto.io.bisq.protobuffer.GetOfferCategoryReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBsqSwapOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBsqSwapOfferReply.displayName = 'proto.io.bisq.protobuffer.GetBsqSwapOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOfferRequest.displayName = 'proto.io.bisq.protobuffer.GetOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOfferReply.displayName = 'proto.io.bisq.protobuffer.GetOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.displayName = 'proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOfferRequest.displayName = 'proto.io.bisq.protobuffer.GetMyOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOfferReply.displayName = 'proto.io.bisq.protobuffer.GetMyOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOffersRequest.displayName = 'proto.io.bisq.protobuffer.GetOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOffersReply.displayName = 'proto.io.bisq.protobuffer.GetOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBsqSwapOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.displayName = 'proto.io.bisq.protobuffer.GetBsqSwapOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetBsqSwapOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBsqSwapOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBsqSwapOffersReply.displayName = 'proto.io.bisq.protobuffer.GetBsqSwapOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOffersRequest.displayName = 'proto.io.bisq.protobuffer.GetMyOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetMyOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOffersReply.displayName = 'proto.io.bisq.protobuffer.GetMyOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.displayName = 'proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.displayName = 'proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateBsqSwapOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.displayName = 'proto.io.bisq.protobuffer.CreateBsqSwapOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateOfferRequest.displayName = 'proto.io.bisq.protobuffer.CreateOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateOfferReply.displayName = 'proto.io.bisq.protobuffer.CreateOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.EditOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.EditOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.EditOfferRequest.displayName = 'proto.io.bisq.protobuffer.EditOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.EditOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.EditOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.EditOfferReply.displayName = 'proto.io.bisq.protobuffer.EditOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CancelOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CancelOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CancelOfferRequest.displayName = 'proto.io.bisq.protobuffer.CancelOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CancelOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CancelOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CancelOfferReply.displayName = 'proto.io.bisq.protobuffer.CancelOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.OfferInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.OfferInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.OfferInfo.displayName = 'proto.io.bisq.protobuffer.OfferInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AvailabilityResultWithDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AvailabilityResultWithDescription.displayName = 'proto.io.bisq.protobuffer.AvailabilityResultWithDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreatePaymentAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreatePaymentAccountRequest.displayName = 'proto.io.bisq.protobuffer.CreatePaymentAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreatePaymentAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreatePaymentAccountReply.displayName = 'proto.io.bisq.protobuffer.CreatePaymentAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountsRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetPaymentAccountsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountsReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentMethodsRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetPaymentMethodsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentMethodsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentMethodsReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentMethodsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountFormRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountFormRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountFormReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountFormReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.displayName = 'proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.displayName = 'proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.displayName = 'proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.displayName = 'proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPriceRequest.displayName = 'proto.io.bisq.protobuffer.MarketPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPriceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPriceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPriceReply.displayName = 'proto.io.bisq.protobuffer.MarketPriceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.displayName = 'proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.displayName = 'proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AverageBsqTradePrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AverageBsqTradePrice.displayName = 'proto.io.bisq.protobuffer.AverageBsqTradePrice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopRequest.displayName = 'proto.io.bisq.protobuffer.StopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopReply.displayName = 'proto.io.bisq.protobuffer.StopReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TakeOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TakeOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TakeOfferRequest.displayName = 'proto.io.bisq.protobuffer.TakeOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TakeOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TakeOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TakeOfferReply.displayName = 'proto.io.bisq.protobuffer.TakeOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentStartedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentStartedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeRequest.displayName = 'proto.io.bisq.protobuffer.GetTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeReply.displayName = 'proto.io.bisq.protobuffer.GetTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradesRequest.displayName = 'proto.io.bisq.protobuffer.GetTradesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetTradesReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradesReply.displayName = 'proto.io.bisq.protobuffer.GetTradesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CloseTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CloseTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CloseTradeRequest.displayName = 'proto.io.bisq.protobuffer.CloseTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CloseTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CloseTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CloseTradeReply.displayName = 'proto.io.bisq.protobuffer.CloseTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.FailTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.FailTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.FailTradeRequest.displayName = 'proto.io.bisq.protobuffer.FailTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.FailTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.FailTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.FailTradeReply.displayName = 'proto.io.bisq.protobuffer.FailTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnFailTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnFailTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnFailTradeRequest.displayName = 'proto.io.bisq.protobuffer.UnFailTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnFailTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnFailTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnFailTradeReply.displayName = 'proto.io.bisq.protobuffer.UnFailTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.WithdrawFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.WithdrawFundsRequest.displayName = 'proto.io.bisq.protobuffer.WithdrawFundsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.WithdrawFundsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.WithdrawFundsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.WithdrawFundsReply.displayName = 'proto.io.bisq.protobuffer.WithdrawFundsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TradeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TradeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TradeInfo.displayName = 'proto.io.bisq.protobuffer.TradeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ContractInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ContractInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ContractInfo.displayName = 'proto.io.bisq.protobuffer.ContractInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BsqSwapTradeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BsqSwapTradeInfo.displayName = 'proto.io.bisq.protobuffer.BsqSwapTradeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.PaymentAccountPayloadInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.displayName = 'proto.io.bisq.protobuffer.PaymentAccountPayloadInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TxFeeRateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TxFeeRateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TxFeeRateInfo.displayName = 'proto.io.bisq.protobuffer.TxFeeRateInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TxInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TxInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TxInfo.displayName = 'proto.io.bisq.protobuffer.TxInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetNetworkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetNetworkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetNetworkRequest.displayName = 'proto.io.bisq.protobuffer.GetNetworkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetNetworkReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetNetworkReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetNetworkReply.displayName = 'proto.io.bisq.protobuffer.GetNetworkReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBalancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBalancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBalancesRequest.displayName = 'proto.io.bisq.protobuffer.GetBalancesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBalancesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBalancesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBalancesReply.displayName = 'proto.io.bisq.protobuffer.GetBalancesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetAddressBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetAddressBalanceRequest.displayName = 'proto.io.bisq.protobuffer.GetAddressBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetAddressBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetAddressBalanceReply.displayName = 'proto.io.bisq.protobuffer.GetAddressBalanceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.displayName = 'proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetUnusedBsqAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.displayName = 'proto.io.bisq.protobuffer.GetUnusedBsqAddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendBsqRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBsqRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBsqRequest.displayName = 'proto.io.bisq.protobuffer.SendBsqRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendBsqReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBsqReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBsqReply.displayName = 'proto.io.bisq.protobuffer.SendBsqReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendBtcRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBtcRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBtcRequest.displayName = 'proto.io.bisq.protobuffer.SendBtcRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendBtcReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBtcReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBtcReply.displayName = 'proto.io.bisq.protobuffer.SendBtcReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.displayName = 'proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.displayName = 'proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTxFeeRateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTxFeeRateRequest.displayName = 'proto.io.bisq.protobuffer.GetTxFeeRateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTxFeeRateReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTxFeeRateReply.displayName = 'proto.io.bisq.protobuffer.GetTxFeeRateReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.displayName = 'proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.displayName = 'proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.displayName = 'proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.displayName = 'proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTransactionRequest.displayName = 'proto.io.bisq.protobuffer.GetTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTransactionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTransactionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTransactionReply.displayName = 'proto.io.bisq.protobuffer.GetTransactionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetFundingAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetFundingAddressesRequest.displayName = 'proto.io.bisq.protobuffer.GetFundingAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetFundingAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetFundingAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetFundingAddressesReply.displayName = 'proto.io.bisq.protobuffer.GetFundingAddressesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetWalletPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetWalletPasswordRequest.displayName = 'proto.io.bisq.protobuffer.SetWalletPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetWalletPasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetWalletPasswordReply.displayName = 'proto.io.bisq.protobuffer.SetWalletPasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RemoveWalletPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.displayName = 'proto.io.bisq.protobuffer.RemoveWalletPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RemoveWalletPasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply.displayName = 'proto.io.bisq.protobuffer.RemoveWalletPasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.LockWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.LockWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.LockWalletRequest.displayName = 'proto.io.bisq.protobuffer.LockWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.LockWalletReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.LockWalletReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.LockWalletReply.displayName = 'proto.io.bisq.protobuffer.LockWalletReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnlockWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnlockWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnlockWalletRequest.displayName = 'proto.io.bisq.protobuffer.UnlockWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnlockWalletReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnlockWalletReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnlockWalletReply.displayName = 'proto.io.bisq.protobuffer.UnlockWalletReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BalancesInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BalancesInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BalancesInfo.displayName = 'proto.io.bisq.protobuffer.BalancesInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BsqBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BsqBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BsqBalanceInfo.displayName = 'proto.io.bisq.protobuffer.BsqBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BtcBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BtcBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BtcBalanceInfo.displayName = 'proto.io.bisq.protobuffer.BtcBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AddressBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AddressBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AddressBalanceInfo.displayName = 'proto.io.bisq.protobuffer.AddressBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetVersionRequest.displayName = 'proto.io.bisq.protobuffer.GetVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetVersionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetVersionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetVersionReply.displayName = 'proto.io.bisq.protobuffer.GetVersionReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputeAgentType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    registrationKey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RegisterDisputeAgentRequest;
  return proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeAgentType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrationKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputeAgentType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegistrationKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string dispute_agent_type = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.getDisputeAgentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.setDisputeAgentType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string registration_key = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.getRegistrationKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.setRegistrationKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RegisterDisputeAgentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RegisterDisputeAgentReply;
  return proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMethodHelpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMethodHelpRequest;
  return proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMethodHelpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string method_name = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest} returns this
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMethodHelpReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodHelp: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMethodHelpReply;
  return proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodHelp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMethodHelpReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodHelp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string method_help = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.getMethodHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply} returns this
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.setMethodHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOfferCategoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOfferCategoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isMyOffer: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOfferCategoryRequest}
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOfferCategoryRequest;
  return proto.io.bisq.protobuffer.GetOfferCategoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOfferCategoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOfferCategoryRequest}
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMyOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOfferCategoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOfferCategoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsMyOffer();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOfferCategoryRequest} returns this
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_my_offer = 2;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.prototype.getIsMyOffer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.GetOfferCategoryRequest} returns this
 */
proto.io.bisq.protobuffer.GetOfferCategoryRequest.prototype.setIsMyOffer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOfferCategoryReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOfferCategoryReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offerCategory: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOfferCategoryReply}
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOfferCategoryReply;
  return proto.io.bisq.protobuffer.GetOfferCategoryReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOfferCategoryReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOfferCategoryReply}
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.bisq.protobuffer.GetOfferCategoryReply.OfferCategory} */ (reader.readEnum());
      msg.setOfferCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOfferCategoryReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOfferCategoryReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfferCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.OfferCategory = {
  UNKNOWN: 0,
  FIAT: 1,
  ALTCOIN: 2,
  BSQ_SWAP: 3
};

/**
 * optional OfferCategory offer_category = 1;
 * @return {!proto.io.bisq.protobuffer.GetOfferCategoryReply.OfferCategory}
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.prototype.getOfferCategory = function() {
  return /** @type {!proto.io.bisq.protobuffer.GetOfferCategoryReply.OfferCategory} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.GetOfferCategoryReply.OfferCategory} value
 * @return {!proto.io.bisq.protobuffer.GetOfferCategoryReply} returns this
 */
proto.io.bisq.protobuffer.GetOfferCategoryReply.prototype.setOfferCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBsqSwapOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    bsqSwapOffer: (f = msg.getBsqSwapOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOfferReply}
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBsqSwapOfferReply;
  return proto.io.bisq.protobuffer.GetBsqSwapOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOfferReply}
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setBsqSwapOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBsqSwapOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBsqSwapOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo bsq_swap_offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.prototype.getBsqSwapOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOfferReply} returns this
*/
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.prototype.setBsqSwapOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOfferReply} returns this
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.prototype.clearBsqSwapOffer = function() {
  return this.setBsqSwapOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetBsqSwapOfferReply.prototype.hasBsqSwapOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest}
 */
proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOfferRequest;
  return proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest}
 */
proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest} returns this
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply}
 */
proto.io.bisq.protobuffer.GetOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOfferReply;
  return proto.io.bisq.protobuffer.GetOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply}
 */
proto.io.bisq.protobuffer.GetOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetOfferReply} returns this
*/
proto.io.bisq.protobuffer.GetOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply} returns this
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    bsqSwapOffer: (f = msg.getBsqSwapOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply;
  return proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setBsqSwapOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBsqSwapOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo bsq_swap_offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.prototype.getBsqSwapOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply} returns this
*/
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.prototype.setBsqSwapOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply} returns this
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.prototype.clearBsqSwapOffer = function() {
  return this.setBsqSwapOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOfferReply.prototype.hasBsqSwapOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOfferRequest;
  return proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOfferReply;
  return proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply} returns this
*/
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply} returns this
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest}
 */
proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOffersRequest;
  return proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest}
 */
proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool all = 3;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offersList: jspb.Message.toObjectList(msg.getOffersList(),
    proto.io.bisq.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply}
 */
proto.io.bisq.protobuffer.GetOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOffersReply;
  return proto.io.bisq.protobuffer.GetOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply}
 */
proto.io.bisq.protobuffer.GetOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo offers = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.OfferInfo>}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.getOffersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.OfferInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetOffersReply} returns this
*/
proto.io.bisq.protobuffer.GetOffersReply.prototype.setOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.addOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply} returns this
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.clearOffersList = function() {
  return this.setOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOffersRequest}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBsqSwapOffersRequest;
  return proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOffersRequest}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBsqSwapOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    bsqSwapOffersList: jspb.Message.toObjectList(msg.getBsqSwapOffersList(),
    proto.io.bisq.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOffersReply}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBsqSwapOffersReply;
  return proto.io.bisq.protobuffer.GetBsqSwapOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOffersReply}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addBsqSwapOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBsqSwapOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBsqSwapOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBsqSwapOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo bsq_swap_offers = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.OfferInfo>}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.prototype.getBsqSwapOffersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.OfferInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOffersReply} returns this
*/
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.prototype.setBsqSwapOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.prototype.addBsqSwapOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetBsqSwapOffersReply} returns this
 */
proto.io.bisq.protobuffer.GetBsqSwapOffersReply.prototype.clearBsqSwapOffersList = function() {
  return this.setBsqSwapOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOffersRequest;
  return proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetMyOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offersList: jspb.Message.toObjectList(msg.getOffersList(),
    proto.io.bisq.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOffersReply;
  return proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo offers = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.OfferInfo>}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.getOffersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.OfferInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply} returns this
*/
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.setOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.addOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.clearOffersList = function() {
  return this.setOffersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    bsqSwapOffersList: jspb.Message.toObjectList(msg.getBsqSwapOffersList(),
    proto.io.bisq.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply;
  return proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addBsqSwapOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBsqSwapOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo bsq_swap_offers = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.OfferInfo>}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.prototype.getBsqSwapOffersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.OfferInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply} returns this
*/
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.prototype.setBsqSwapOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.prototype.addBsqSwapOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply} returns this
 */
proto.io.bisq.protobuffer.GetMyBsqSwapOffersReply.prototype.clearBsqSwapOffersList = function() {
  return this.setBsqSwapOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    minAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    price: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest;
  return proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMinAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 amount = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 min_amount = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.getMinAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string price = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateBsqSwapOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    bsqSwapOffer: (f = msg.getBsqSwapOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferReply}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateBsqSwapOfferReply;
  return proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateBsqSwapOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferReply}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setBsqSwapOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateBsqSwapOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBsqSwapOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo bsq_swap_offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.prototype.getBsqSwapOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferReply} returns this
*/
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.prototype.setBsqSwapOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreateBsqSwapOfferReply} returns this
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.prototype.clearBsqSwapOffer = function() {
  return this.setBsqSwapOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateBsqSwapOfferReply.prototype.hasBsqSwapOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketPriceMarginPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minAmount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    buyerSecurityDepositPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 9, ""),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    makerFeeCurrencyCode: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateOfferRequest;
  return proto.io.bisq.protobuffer.CreateOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMarginPct(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinAmount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuyerSecurityDepositPct(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFeeCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketPriceMarginPct();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMinAmount();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getBuyerSecurityDepositPct();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMakerFeeCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string direction = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool use_market_based_price = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double market_price_margin_pct = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getMarketPriceMarginPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setMarketPriceMarginPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 min_amount = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getMinAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double buyer_security_deposit_pct = 8;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getBuyerSecurityDepositPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setBuyerSecurityDepositPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string trigger_price = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string payment_account_id = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string maker_fee_currency_code = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getMakerFeeCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setMakerFeeCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateOfferReply}
 */
proto.io.bisq.protobuffer.CreateOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateOfferReply;
  return proto.io.bisq.protobuffer.CreateOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateOfferReply}
 */
proto.io.bisq.protobuffer.CreateOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferReply} returns this
*/
proto.io.bisq.protobuffer.CreateOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreateOfferReply} returns this
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.EditOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.EditOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.EditOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFieldWithDefault(msg, 2, ""),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    marketPriceMarginPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 5, ""),
    enable: jspb.Message.getFieldWithDefault(msg, 6, 0),
    editType: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest}
 */
proto.io.bisq.protobuffer.EditOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.EditOfferRequest;
  return proto.io.bisq.protobuffer.EditOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.EditOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest}
 */
proto.io.bisq.protobuffer.EditOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMarginPct(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setEnable(value);
      break;
    case 7:
      var value = /** @type {!proto.io.bisq.protobuffer.EditOfferRequest.EditType} */ (reader.readEnum());
      msg.setEditType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.EditOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.EditOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.EditOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMarketPriceMarginPct();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEnable();
  if (f !== 0) {
    writer.writeSint32(
      6,
      f
    );
  }
  f = message.getEditType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.io.bisq.protobuffer.EditOfferRequest.EditType = {
  ACTIVATION_STATE_ONLY: 0,
  FIXED_PRICE_ONLY: 1,
  FIXED_PRICE_AND_ACTIVATION_STATE: 2,
  MKT_PRICE_MARGIN_ONLY: 3,
  MKT_PRICE_MARGIN_AND_ACTIVATION_STATE: 4,
  TRIGGER_PRICE_ONLY: 5,
  TRIGGER_PRICE_AND_ACTIVATION_STATE: 6,
  MKT_PRICE_MARGIN_AND_TRIGGER_PRICE: 7,
  MKT_PRICE_MARGIN_AND_TRIGGER_PRICE_AND_ACTIVATION_STATE: 8
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest} returns this
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string price = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest} returns this
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool use_market_based_price = 3;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest} returns this
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional double market_price_margin_pct = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.getMarketPriceMarginPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest} returns this
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.setMarketPriceMarginPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string trigger_price = 5;
 * @return {string}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest} returns this
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional sint32 enable = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.getEnable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest} returns this
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.setEnable = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional EditType edit_type = 7;
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest.EditType}
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.getEditType = function() {
  return /** @type {!proto.io.bisq.protobuffer.EditOfferRequest.EditType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.EditOfferRequest.EditType} value
 * @return {!proto.io.bisq.protobuffer.EditOfferRequest} returns this
 */
proto.io.bisq.protobuffer.EditOfferRequest.prototype.setEditType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.EditOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.EditOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.EditOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.EditOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.EditOfferReply}
 */
proto.io.bisq.protobuffer.EditOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.EditOfferReply;
  return proto.io.bisq.protobuffer.EditOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.EditOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.EditOfferReply}
 */
proto.io.bisq.protobuffer.EditOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.EditOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.EditOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.EditOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.EditOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CancelOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CancelOfferRequest;
  return proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CancelOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CancelOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CancelOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CancelOfferReply}
 */
proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CancelOfferReply;
  return proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CancelOfferReply}
 */
proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CancelOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CancelOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.OfferInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.OfferInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OfferInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketPriceMarginPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minAmount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 8, ""),
    minVolume: jspb.Message.getFieldWithDefault(msg, 9, ""),
    buyerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 11, ""),
    isCurrencyForMakerFeeBtc: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    paymentMethodShortName: jspb.Message.getFieldWithDefault(msg, 15, ""),
    baseCurrencyCode: jspb.Message.getFieldWithDefault(msg, 16, ""),
    counterCurrencyCode: jspb.Message.getFieldWithDefault(msg, 17, ""),
    date: jspb.Message.getFieldWithDefault(msg, 18, 0),
    state: jspb.Message.getFieldWithDefault(msg, 19, ""),
    sellerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 20, 0),
    offerFeePaymentTxId: jspb.Message.getFieldWithDefault(msg, 21, ""),
    txFee: jspb.Message.getFieldWithDefault(msg, 22, 0),
    makerFee: jspb.Message.getFieldWithDefault(msg, 23, 0),
    isActivated: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    isMyOffer: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    isMyPendingOffer: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    isBsqSwapOffer: jspb.Message.getBooleanFieldWithDefault(msg, 27, false),
    ownerNodeAddress: jspb.Message.getFieldWithDefault(msg, 28, ""),
    pubKeyRing: jspb.Message.getFieldWithDefault(msg, 29, ""),
    versionNr: jspb.Message.getFieldWithDefault(msg, 30, ""),
    protocolVersion: jspb.Message.getFieldWithDefault(msg, 31, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.OfferInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.OfferInfo;
  return proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.OfferInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMarginPct(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinAmount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolume(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinVolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyerSecurityDeposit(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCurrencyForMakerFeeBtc(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodShortName(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseCurrencyCode(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCounterCurrencyCode(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSellerSecurityDeposit(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferFeePaymentTxId(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxFee(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMakerFee(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActivated(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMyOffer(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMyPendingOffer(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBsqSwapOffer(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerNodeAddress(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKeyRing(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionNr(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.OfferInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketPriceMarginPct();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMinAmount();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getVolume();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMinVolume();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getBuyerSecurityDeposit();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getIsCurrencyForMakerFeeBtc();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPaymentMethodShortName();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getBaseCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCounterCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getSellerSecurityDeposit();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getOfferFeePaymentTxId();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getTxFee();
  if (f !== 0) {
    writer.writeUint64(
      22,
      f
    );
  }
  f = message.getMakerFee();
  if (f !== 0) {
    writer.writeUint64(
      23,
      f
    );
  }
  f = message.getIsActivated();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getIsMyOffer();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getIsMyPendingOffer();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getIsBsqSwapOffer();
  if (f) {
    writer.writeBool(
      27,
      f
    );
  }
  f = message.getOwnerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getPubKeyRing();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getVersionNr();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getProtocolVersion();
  if (f !== 0) {
    writer.writeInt32(
      31,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string direction = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool use_market_based_price = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double market_price_margin_pct = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMarketPriceMarginPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMarketPriceMarginPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 min_amount = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMinAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string volume = 8;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string min_volume = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMinVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMinVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint64 buyer_security_deposit = 10;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getBuyerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setBuyerSecurityDeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string trigger_price = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool is_currency_for_maker_fee_btc = 12;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getIsCurrencyForMakerFeeBtc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setIsCurrencyForMakerFeeBtc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string payment_account_id = 13;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string payment_method_id = 14;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string payment_method_short_name = 15;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentMethodShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentMethodShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string base_currency_code = 16;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getBaseCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setBaseCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string counter_currency_code = 17;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getCounterCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setCounterCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional uint64 date = 18;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional string state = 19;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional uint64 seller_security_deposit = 20;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getSellerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setSellerSecurityDeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string offer_fee_payment_tx_id = 21;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getOfferFeePaymentTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setOfferFeePaymentTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional uint64 tx_fee = 22;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getTxFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setTxFee = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint64 maker_fee = 23;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMakerFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMakerFee = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional bool is_activated = 24;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getIsActivated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setIsActivated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional bool is_my_offer = 25;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getIsMyOffer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setIsMyOffer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional bool is_my_pending_offer = 26;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getIsMyPendingOffer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setIsMyPendingOffer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional bool is_bsq_swap_offer = 27;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getIsBsqSwapOffer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 27, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setIsBsqSwapOffer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 27, value);
};


/**
 * optional string owner_node_address = 28;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getOwnerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setOwnerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional string pub_key_ring = 29;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPubKeyRing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPubKeyRing = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string version_nr = 30;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getVersionNr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setVersionNr = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional int32 protocol_version = 31;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getProtocolVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 31, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilityResult: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AvailabilityResultWithDescription;
  return proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.bisq.protobuffer.AvailabilityResult} */ (reader.readEnum());
      msg.setAvailabilityResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilityResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional AvailabilityResult availability_result = 1;
 * @return {!proto.io.bisq.protobuffer.AvailabilityResult}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.getAvailabilityResult = function() {
  return /** @type {!proto.io.bisq.protobuffer.AvailabilityResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.AvailabilityResult} value
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.setAvailabilityResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreatePaymentAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountForm: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreatePaymentAccountRequest;
  return proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountForm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreatePaymentAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountForm();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_account_form = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.getPaymentAccountForm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.setPaymentAccountForm = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreatePaymentAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccount: (f = msg.getPaymentAccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreatePaymentAccountReply;
  return proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.setPaymentAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreatePaymentAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount payment_account = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.getPaymentAccount = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} returns this
*/
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.setPaymentAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.clearPaymentAccount = function() {
  return this.setPaymentAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.hasPaymentAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountsRequest;
  return proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountsList: jspb.Message.toObjectList(msg.getPaymentAccountsList(),
    pb_pb.PaymentAccount.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountsReply;
  return proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.addPaymentAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentAccount payment_accounts = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentAccount>}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.getPaymentAccountsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentAccount>} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.setPaymentAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.addPaymentAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.clearPaymentAccountsList = function() {
  return this.setPaymentAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentMethodsRequest;
  return proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentMethodsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    pb_pb.PaymentMethod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentMethodsReply;
  return proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentMethod;
      reader.readMessage(value,pb_pb.PaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentMethodsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod payment_methods = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentMethod>}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentMethod>} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentMethod}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountFormRequest;
  return proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_method_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountFormReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountFormJson: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountFormReply;
  return proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountFormJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountFormJson();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_account_form_json = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.getPaymentAccountFormJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.setPaymentAccountFormJson = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tradeInstant: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest;
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTradeInstant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTradeInstant();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool trade_instant = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getTradeInstant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setTradeInstant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccount: (f = msg.getPaymentAccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply;
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.setPaymentAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount payment_account = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.getPaymentAccount = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
*/
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.setPaymentAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.clearPaymentAccount = function() {
  return this.setPaymentAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.hasPaymentAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest;
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    pb_pb.PaymentMethod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply;
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentMethod;
      reader.readMessage(value,pb_pb.PaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod payment_methods = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentMethod>}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentMethod>} value
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
*/
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentMethod}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPriceRequest;
  return proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest} returns this
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPriceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply}
 */
proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPriceReply;
  return proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply}
 */
proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPriceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply} returns this
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    days: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest;
  return proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setDays(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDays();
  if (f !== 0) {
    writer.writeSint32(
      1,
      f
    );
  }
};


/**
 * optional sint32 days = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.prototype.getDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest} returns this
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceRequest.prototype.setDays = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: (f = msg.getPrice()) && proto.io.bisq.protobuffer.AverageBsqTradePrice.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply;
  return proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.AverageBsqTradePrice;
      reader.readMessage(value,proto.io.bisq.protobuffer.AverageBsqTradePrice.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AverageBsqTradePrice.serializeBinaryToWriter
    );
  }
};


/**
 * optional AverageBsqTradePrice price = 1;
 * @return {?proto.io.bisq.protobuffer.AverageBsqTradePrice}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.prototype.getPrice = function() {
  return /** @type{?proto.io.bisq.protobuffer.AverageBsqTradePrice} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AverageBsqTradePrice, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.AverageBsqTradePrice|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply} returns this
*/
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply} returns this
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetAverageBsqTradePriceReply.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AverageBsqTradePrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AverageBsqTradePrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    usdPrice: jspb.Message.getFieldWithDefault(msg, 1, ""),
    btcPrice: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AverageBsqTradePrice}
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AverageBsqTradePrice;
  return proto.io.bisq.protobuffer.AverageBsqTradePrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AverageBsqTradePrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AverageBsqTradePrice}
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsdPrice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBtcPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AverageBsqTradePrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AverageBsqTradePrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsdPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBtcPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string usd_price = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.prototype.getUsdPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.AverageBsqTradePrice} returns this
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.prototype.setUsdPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string btc_price = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.prototype.getBtcPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.AverageBsqTradePrice} returns this
 */
proto.io.bisq.protobuffer.AverageBsqTradePrice.prototype.setBtcPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopRequest}
 */
proto.io.bisq.protobuffer.StopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopRequest;
  return proto.io.bisq.protobuffer.StopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopRequest}
 */
proto.io.bisq.protobuffer.StopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopReply}
 */
proto.io.bisq.protobuffer.StopReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopReply;
  return proto.io.bisq.protobuffer.StopReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopReply}
 */
proto.io.bisq.protobuffer.StopReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TakeOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    takerFeeCurrencyCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TakeOfferRequest;
  return proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeCurrencyCode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TakeOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfferId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTakerFeeCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string offer_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getOfferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setOfferId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_account_id = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string taker_fee_currency_code = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getTakerFeeCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setTakerFeeCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 amount = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TakeOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto.io.bisq.protobuffer.TradeInfo.toObject(includeInstance, f),
    failureReason: (f = msg.getFailureReason()) && proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply}
 */
proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TakeOfferReply;
  return proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply}
 */
proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    case 2:
      var value = new proto.io.bisq.protobuffer.AvailabilityResultWithDescription;
      reader.readMessage(value,proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader);
      msg.setFailureReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TakeOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
  f = message.getFailureReason();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradeInfo trade = 1;
 * @return {?proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.getTrade = function() {
  return /** @type{?proto.io.bisq.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
*/
proto.io.bisq.protobuffer.TakeOfferReply.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailabilityResultWithDescription failure_reason = 2;
 * @return {?proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.getFailureReason = function() {
  return /** @type{?proto.io.bisq.protobuffer.AvailabilityResultWithDescription} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AvailabilityResultWithDescription, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.AvailabilityResultWithDescription|undefined} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
*/
proto.io.bisq.protobuffer.TakeOfferReply.prototype.setFailureReason = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.clearFailureReason = function() {
  return this.setFailureReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.hasFailureReason = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest;
  return proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} returns this
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentStartedReply;
  return proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest;
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} returns this
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply;
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest}
 */
proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeRequest;
  return proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest}
 */
proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest} returns this
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto.io.bisq.protobuffer.TradeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply}
 */
proto.io.bisq.protobuffer.GetTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeReply;
  return proto.io.bisq.protobuffer.GetTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply}
 */
proto.io.bisq.protobuffer.GetTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradeInfo trade = 1;
 * @return {?proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.getTrade = function() {
  return /** @type{?proto.io.bisq.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTradeReply} returns this
*/
proto.io.bisq.protobuffer.GetTradeReply.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply} returns this
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradesRequest}
 */
proto.io.bisq.protobuffer.GetTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradesRequest;
  return proto.io.bisq.protobuffer.GetTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradesRequest}
 */
proto.io.bisq.protobuffer.GetTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.bisq.protobuffer.GetTradesRequest.Category} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.io.bisq.protobuffer.GetTradesRequest.Category = {
  OPEN: 0,
  CLOSED: 1,
  FAILED: 2
};

/**
 * optional Category category = 1;
 * @return {!proto.io.bisq.protobuffer.GetTradesRequest.Category}
 */
proto.io.bisq.protobuffer.GetTradesRequest.prototype.getCategory = function() {
  return /** @type {!proto.io.bisq.protobuffer.GetTradesRequest.Category} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.GetTradesRequest.Category} value
 * @return {!proto.io.bisq.protobuffer.GetTradesRequest} returns this
 */
proto.io.bisq.protobuffer.GetTradesRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetTradesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.io.bisq.protobuffer.TradeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradesReply}
 */
proto.io.bisq.protobuffer.GetTradesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradesReply;
  return proto.io.bisq.protobuffer.GetTradesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradesReply}
 */
proto.io.bisq.protobuffer.GetTradesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeInfo trades = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.TradeInfo>}
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.TradeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.TradeInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetTradesReply} returns this
*/
proto.io.bisq.protobuffer.GetTradesReply.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.TradeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.TradeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetTradesReply} returns this
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CloseTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CloseTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CloseTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CloseTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CloseTradeRequest}
 */
proto.io.bisq.protobuffer.CloseTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CloseTradeRequest;
  return proto.io.bisq.protobuffer.CloseTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CloseTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CloseTradeRequest}
 */
proto.io.bisq.protobuffer.CloseTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CloseTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CloseTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CloseTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CloseTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CloseTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CloseTradeRequest} returns this
 */
proto.io.bisq.protobuffer.CloseTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CloseTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CloseTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CloseTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CloseTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CloseTradeReply}
 */
proto.io.bisq.protobuffer.CloseTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CloseTradeReply;
  return proto.io.bisq.protobuffer.CloseTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CloseTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CloseTradeReply}
 */
proto.io.bisq.protobuffer.CloseTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CloseTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CloseTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CloseTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CloseTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.FailTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.FailTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.FailTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.FailTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.FailTradeRequest}
 */
proto.io.bisq.protobuffer.FailTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.FailTradeRequest;
  return proto.io.bisq.protobuffer.FailTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.FailTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.FailTradeRequest}
 */
proto.io.bisq.protobuffer.FailTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.FailTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.FailTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.FailTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.FailTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.FailTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.FailTradeRequest} returns this
 */
proto.io.bisq.protobuffer.FailTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.FailTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.FailTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.FailTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.FailTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.FailTradeReply}
 */
proto.io.bisq.protobuffer.FailTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.FailTradeReply;
  return proto.io.bisq.protobuffer.FailTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.FailTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.FailTradeReply}
 */
proto.io.bisq.protobuffer.FailTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.FailTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.FailTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.FailTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.FailTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnFailTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnFailTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnFailTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnFailTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnFailTradeRequest}
 */
proto.io.bisq.protobuffer.UnFailTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnFailTradeRequest;
  return proto.io.bisq.protobuffer.UnFailTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnFailTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnFailTradeRequest}
 */
proto.io.bisq.protobuffer.UnFailTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnFailTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnFailTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnFailTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnFailTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.UnFailTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.UnFailTradeRequest} returns this
 */
proto.io.bisq.protobuffer.UnFailTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnFailTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnFailTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnFailTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnFailTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnFailTradeReply}
 */
proto.io.bisq.protobuffer.UnFailTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnFailTradeReply;
  return proto.io.bisq.protobuffer.UnFailTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnFailTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnFailTradeReply}
 */
proto.io.bisq.protobuffer.UnFailTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnFailTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnFailTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnFailTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnFailTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.WithdrawFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.WithdrawFundsRequest;
  return proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.WithdrawFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string memo = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.WithdrawFundsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsReply}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.WithdrawFundsReply;
  return proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsReply}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.WithdrawFundsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TradeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TradeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TradeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f),
    tradeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shortId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    role: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isCurrencyForTakerFeeBtc: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    txFeeAsLong: jspb.Message.getFieldWithDefault(msg, 7, 0),
    takerFeeAsLong: jspb.Message.getFieldWithDefault(msg, 8, 0),
    takerFeeTxId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    depositTxId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    payoutTxId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    tradeAmountAsLong: jspb.Message.getFieldWithDefault(msg, 12, 0),
    tradePrice: jspb.Message.getFieldWithDefault(msg, 13, ""),
    tradingPeerNodeAddress: jspb.Message.getFieldWithDefault(msg, 14, ""),
    state: jspb.Message.getFieldWithDefault(msg, 15, ""),
    phase: jspb.Message.getFieldWithDefault(msg, 16, ""),
    tradePeriodState: jspb.Message.getFieldWithDefault(msg, 17, ""),
    isDepositPublished: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    isDepositConfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    isPaymentStartedMessageSent: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    isPaymentReceivedMessageSent: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isPayoutPublished: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    isCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    contractAsJson: jspb.Message.getFieldWithDefault(msg, 24, ""),
    contract: (f = msg.getContract()) && proto.io.bisq.protobuffer.ContractInfo.toObject(includeInstance, f),
    tradeVolume: jspb.Message.getFieldWithDefault(msg, 26, ""),
    bsqSwapTradeInfo: (f = msg.getBsqSwapTradeInfo()) && proto.io.bisq.protobuffer.BsqSwapTradeInfo.toObject(includeInstance, f),
    closingStatus: jspb.Message.getFieldWithDefault(msg, 29, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TradeInfo;
  return proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TradeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCurrencyForTakerFeeBtc(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxFeeAsLong(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTakerFeeAsLong(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeTxId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDepositTxId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayoutTxId(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTradeAmountAsLong(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradePrice(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradingPeerNodeAddress(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradePeriodState(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositPublished(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositConfirmed(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaymentStartedMessageSent(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaymentReceivedMessageSent(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayoutPublished(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCompleted(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAsJson(value);
      break;
    case 25:
      var value = new proto.io.bisq.protobuffer.ContractInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeVolume(value);
      break;
    case 28:
      var value = new proto.io.bisq.protobuffer.BsqSwapTradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BsqSwapTradeInfo.deserializeBinaryFromReader);
      msg.setBsqSwapTradeInfo(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setClosingStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TradeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShortId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsCurrencyForTakerFeeBtc();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTxFeeAsLong();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTakerFeeAsLong();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getTakerFeeTxId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDepositTxId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPayoutTxId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTradeAmountAsLong();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getTradePrice();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTradingPeerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getPhase();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getTradePeriodState();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getIsDepositPublished();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getIsDepositConfirmed();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getIsPaymentStartedMessageSent();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getIsPaymentReceivedMessageSent();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsPayoutPublished();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getIsCompleted();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getContractAsJson();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter
    );
  }
  f = message.getTradeVolume();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getBsqSwapTradeInfo();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.io.bisq.protobuffer.BsqSwapTradeInfo.serializeBinaryToWriter
    );
  }
  f = message.getClosingStatus();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
*/
proto.io.bisq.protobuffer.TradeInfo.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string trade_id = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string short_id = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getShortId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setShortId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string role = 5;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_currency_for_taker_fee_btc = 6;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsCurrencyForTakerFeeBtc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsCurrencyForTakerFeeBtc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional uint64 tx_fee_as_long = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTxFeeAsLong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTxFeeAsLong = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 taker_fee_as_long = 8;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerFeeAsLong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerFeeAsLong = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string taker_fee_tx_id = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerFeeTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerFeeTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string deposit_tx_id = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getDepositTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setDepositTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string payout_tx_id = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPayoutTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPayoutTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 trade_amount_as_long = 12;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeAmountAsLong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeAmountAsLong = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string trade_price = 13;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradePrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradePrice = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string trading_peer_node_address = 14;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradingPeerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradingPeerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string state = 15;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string phase = 16;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPhase = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string trade_period_state = 17;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradePeriodState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradePeriodState = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool is_deposit_published = 18;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsDepositPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsDepositPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool is_deposit_confirmed = 19;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsDepositConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsDepositConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional bool is_payment_started_message_sent = 20;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPaymentStartedMessageSent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPaymentStartedMessageSent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool is_payment_received_message_sent = 21;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPaymentReceivedMessageSent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPaymentReceivedMessageSent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool is_payout_published = 22;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPayoutPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPayoutPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool is_completed = 23;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional string contract_as_json = 24;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getContractAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setContractAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional ContractInfo contract = 25;
 * @return {?proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getContract = function() {
  return /** @type{?proto.io.bisq.protobuffer.ContractInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.ContractInfo, 25));
};


/**
 * @param {?proto.io.bisq.protobuffer.ContractInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
*/
proto.io.bisq.protobuffer.TradeInfo.prototype.setContract = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.hasContract = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string trade_volume = 26;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional BsqSwapTradeInfo bsq_swap_trade_info = 28;
 * @return {?proto.io.bisq.protobuffer.BsqSwapTradeInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getBsqSwapTradeInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.BsqSwapTradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BsqSwapTradeInfo, 28));
};


/**
 * @param {?proto.io.bisq.protobuffer.BsqSwapTradeInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
*/
proto.io.bisq.protobuffer.TradeInfo.prototype.setBsqSwapTradeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.clearBsqSwapTradeInfo = function() {
  return this.setBsqSwapTradeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.hasBsqSwapTradeInfo = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional string closing_status = 29;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getClosingStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setClosingStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ContractInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ContractInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ContractInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyerNodeAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sellerNodeAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mediatorNodeAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refundAgentNodeAddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isBuyerMakerAndSellerTaker: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    makerAccountId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    takerAccountId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    makerPaymentAccountPayload: (f = msg.getMakerPaymentAccountPayload()) && proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject(includeInstance, f),
    takerPaymentAccountPayload: (f = msg.getTakerPaymentAccountPayload()) && proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject(includeInstance, f),
    makerPayoutAddressString: jspb.Message.getFieldWithDefault(msg, 10, ""),
    takerPayoutAddressString: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lockTime: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ContractInfo;
  return proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ContractInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyerNodeAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellerNodeAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediatorNodeAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefundAgentNodeAddress(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBuyerMakerAndSellerTaker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerAccountId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerAccountId(value);
      break;
    case 8:
      var value = new proto.io.bisq.protobuffer.PaymentAccountPayloadInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader);
      msg.setMakerPaymentAccountPayload(value);
      break;
    case 9:
      var value = new proto.io.bisq.protobuffer.PaymentAccountPayloadInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader);
      msg.setTakerPaymentAccountPayload(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerPayoutAddressString(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerPayoutAddressString(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ContractInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSellerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMediatorNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefundAgentNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsBuyerMakerAndSellerTaker();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMakerAccountId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTakerAccountId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMakerPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter
    );
  }
  f = message.getTakerPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter
    );
  }
  f = message.getMakerPayoutAddressString();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTakerPayoutAddressString();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLockTime();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
};


/**
 * optional string buyer_node_address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getBuyerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setBuyerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string seller_node_address = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getSellerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setSellerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string mediator_node_address = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMediatorNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMediatorNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refund_agent_node_address = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getRefundAgentNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setRefundAgentNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_buyer_maker_and_seller_taker = 5;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getIsBuyerMakerAndSellerTaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setIsBuyerMakerAndSellerTaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string maker_account_id = 6;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string taker_account_id = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional PaymentAccountPayloadInfo maker_payment_account_payload = 8;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerPaymentAccountPayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.PaymentAccountPayloadInfo, 8));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
*/
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.clearMakerPaymentAccountPayload = function() {
  return this.setMakerPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.hasMakerPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PaymentAccountPayloadInfo taker_payment_account_payload = 9;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerPaymentAccountPayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.PaymentAccountPayloadInfo, 9));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
*/
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.clearTakerPaymentAccountPayload = function() {
  return this.setTakerPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.hasTakerPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string maker_payout_address_string = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerPayoutAddressString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerPayoutAddressString = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string taker_payout_address_string = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerPayoutAddressString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerPayoutAddressString = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 lock_time = 12;
 * @return {number}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getLockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setLockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BsqSwapTradeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bsqTradeAmount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    btcTradeAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bsqMakerTradeFee: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bsqTakerTradeFee: jspb.Message.getFieldWithDefault(msg, 5, 0),
    txFeePerVbyte: jspb.Message.getFieldWithDefault(msg, 6, 0),
    makerBsqAddress: jspb.Message.getFieldWithDefault(msg, 7, ""),
    makerBtcAddress: jspb.Message.getFieldWithDefault(msg, 8, ""),
    takerBsqAddress: jspb.Message.getFieldWithDefault(msg, 9, ""),
    takerBtcAddress: jspb.Message.getFieldWithDefault(msg, 10, ""),
    numConfirmations: jspb.Message.getFieldWithDefault(msg, 11, 0),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 12, ""),
    payout: jspb.Message.getFieldWithDefault(msg, 13, 0),
    swapPeerPayout: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BsqSwapTradeInfo;
  return proto.io.bisq.protobuffer.BsqSwapTradeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBsqTradeAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBtcTradeAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBsqMakerTradeFee(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBsqTakerTradeFee(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxFeePerVbyte(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerBsqAddress(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerBtcAddress(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerBsqAddress(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerBtcAddress(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumConfirmations(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPayout(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSwapPeerPayout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BsqSwapTradeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBsqTradeAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBtcTradeAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getBsqMakerTradeFee();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBsqTakerTradeFee();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTxFeePerVbyte();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMakerBsqAddress();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMakerBtcAddress();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTakerBsqAddress();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTakerBtcAddress();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getNumConfirmations();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPayout();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getSwapPeerPayout();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
};


/**
 * optional string tx_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 bsq_trade_amount = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getBsqTradeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setBsqTradeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 btc_trade_amount = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getBtcTradeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setBtcTradeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 bsq_maker_trade_fee = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getBsqMakerTradeFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setBsqMakerTradeFee = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 bsq_taker_trade_fee = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getBsqTakerTradeFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setBsqTakerTradeFee = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 tx_fee_per_vbyte = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getTxFeePerVbyte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setTxFeePerVbyte = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string maker_bsq_address = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getMakerBsqAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setMakerBsqAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string maker_btc_address = 8;
 * @return {string}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getMakerBtcAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setMakerBtcAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string taker_bsq_address = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getTakerBsqAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setTakerBsqAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string taker_btc_address = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getTakerBtcAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setTakerBtcAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional uint64 num_confirmations = 11;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getNumConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setNumConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string error_message = 12;
 * @return {string}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional uint64 payout = 13;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getPayout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setPayout = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 swap_peer_payout = 14;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.getSwapPeerPayout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqSwapTradeInfo} returns this
 */
proto.io.bisq.protobuffer.BsqSwapTradeInfo.prototype.setSwapPeerPayout = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    paymentDetails: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.PaymentAccountPayloadInfo;
  return proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPaymentDetails();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} returns this
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_method_id = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} returns this
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} returns this
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string payment_details = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.getPaymentDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} returns this
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.setPaymentDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TxFeeRateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    useCustomTxFeeRate: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    customTxFeeRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    feeServiceRate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastFeeServiceRequestTs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    minFeeServiceRate: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TxFeeRateInfo;
  return proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TxFeeRateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseCustomTxFeeRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCustomTxFeeRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeeServiceRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastFeeServiceRequestTs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinFeeServiceRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TxFeeRateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseCustomTxFeeRate();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCustomTxFeeRate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFeeServiceRate();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLastFeeServiceRequestTs();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMinFeeServiceRate();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional bool use_custom_tx_fee_rate = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getUseCustomTxFeeRate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setUseCustomTxFeeRate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint64 custom_tx_fee_rate = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getCustomTxFeeRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setCustomTxFeeRate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 fee_service_rate = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getFeeServiceRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setFeeServiceRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 last_fee_service_request_ts = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getLastFeeServiceRequestTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setLastFeeServiceRequestTs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 min_fee_service_rate = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getMinFeeServiceRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setMinFeeServiceRate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TxInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TxInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TxInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputSum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    outputSum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 4, 0),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isPending: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    memo: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.TxInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TxInfo;
  return proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TxInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInputSum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOutputSum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPending(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TxInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputSum();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOutputSum();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIsPending();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string tx_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 input_sum = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getInputSum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setInputSum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 output_sum = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getOutputSum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setOutputSum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 fee = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 size = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool is_pending = 6;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getIsPending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setIsPending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string memo = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetNetworkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetNetworkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetNetworkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetNetworkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetNetworkRequest}
 */
proto.io.bisq.protobuffer.GetNetworkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetNetworkRequest;
  return proto.io.bisq.protobuffer.GetNetworkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetNetworkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetNetworkRequest}
 */
proto.io.bisq.protobuffer.GetNetworkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetNetworkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetNetworkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetNetworkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetNetworkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetNetworkReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetNetworkReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetNetworkReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetNetworkReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    network: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetNetworkReply}
 */
proto.io.bisq.protobuffer.GetNetworkReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetNetworkReply;
  return proto.io.bisq.protobuffer.GetNetworkReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetNetworkReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetNetworkReply}
 */
proto.io.bisq.protobuffer.GetNetworkReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetNetworkReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetNetworkReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetNetworkReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetNetworkReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string network = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetNetworkReply.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetNetworkReply} returns this
 */
proto.io.bisq.protobuffer.GetNetworkReply.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBalancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBalancesRequest;
  return proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBalancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest} returns this
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBalancesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balances: (f = msg.getBalances()) && proto.io.bisq.protobuffer.BalancesInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply}
 */
proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBalancesReply;
  return proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply}
 */
proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.BalancesInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader);
      msg.setBalances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBalancesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalances();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BalancesInfo balances = 1;
 * @return {?proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.getBalances = function() {
  return /** @type{?proto.io.bisq.protobuffer.BalancesInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BalancesInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.BalancesInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply} returns this
*/
proto.io.bisq.protobuffer.GetBalancesReply.prototype.setBalances = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply} returns this
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.clearBalances = function() {
  return this.setBalances(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.hasBalances = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetAddressBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetAddressBalanceRequest;
  return proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetAddressBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} returns this
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetAddressBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBalanceInfo: (f = msg.getAddressBalanceInfo()) && proto.io.bisq.protobuffer.AddressBalanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetAddressBalanceReply;
  return proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.AddressBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader);
      msg.setAddressBalanceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetAddressBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBalanceInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddressBalanceInfo address_balance_info = 1;
 * @return {?proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.getAddressBalanceInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.AddressBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.AddressBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply} returns this
*/
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.setAddressBalanceInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply} returns this
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.clearAddressBalanceInfo = function() {
  return this.setAddressBalanceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.hasAddressBalanceInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest;
  return proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetUnusedBsqAddressReply;
  return proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply} returns this
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBsqRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBsqRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBsqRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    txFeeRate: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest}
 */
proto.io.bisq.protobuffer.SendBsqRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBsqRequest;
  return proto.io.bisq.protobuffer.SendBsqRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBsqRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest}
 */
proto.io.bisq.protobuffer.SendBsqRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxFeeRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBsqRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBsqRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBsqRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTxFeeRate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest} returns this
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest} returns this
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tx_fee_rate = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.getTxFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest} returns this
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.setTxFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendBsqReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBsqReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBsqReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBsqReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInfo: (f = msg.getTxInfo()) && proto.io.bisq.protobuffer.TxInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendBsqReply}
 */
proto.io.bisq.protobuffer.SendBsqReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBsqReply;
  return proto.io.bisq.protobuffer.SendBsqReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBsqReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBsqReply}
 */
proto.io.bisq.protobuffer.SendBsqReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendBsqReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBsqReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBsqReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBsqReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxInfo tx_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.SendBsqReply.prototype.getTxInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.SendBsqReply} returns this
*/
proto.io.bisq.protobuffer.SendBsqReply.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SendBsqReply} returns this
 */
proto.io.bisq.protobuffer.SendBsqReply.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SendBsqReply.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBtcRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    txFeeRate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest}
 */
proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBtcRequest;
  return proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest}
 */
proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxFeeRate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBtcRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTxFeeRate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tx_fee_rate = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getTxFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setTxFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string memo = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBtcReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBtcReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInfo: (f = msg.getTxInfo()) && proto.io.bisq.protobuffer.TxInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendBtcReply}
 */
proto.io.bisq.protobuffer.SendBtcReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBtcReply;
  return proto.io.bisq.protobuffer.SendBtcReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBtcReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBtcReply}
 */
proto.io.bisq.protobuffer.SendBtcReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBtcReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBtcReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxInfo tx_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.getTxInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.SendBtcReply} returns this
*/
proto.io.bisq.protobuffer.SendBtcReply.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SendBtcReply} returns this
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest;
  return proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} returns this
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} returns this
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAmountReceived: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply;
  return proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAmountReceived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAmountReceived();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_amount_received = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.prototype.getIsAmountReceived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply} returns this
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.prototype.setIsAmountReceived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTxFeeRateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateRequest}
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTxFeeRateRequest;
  return proto.io.bisq.protobuffer.GetTxFeeRateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateRequest}
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTxFeeRateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTxFeeRateReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txFeeRateInfo: (f = msg.getTxFeeRateInfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTxFeeRateReply;
  return proto.io.bisq.protobuffer.GetTxFeeRateReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxFeeRateInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader);
      msg.setTxFeeRateInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTxFeeRateReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxFeeRateInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo tx_fee_rate_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.getTxFeeRateInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply} returns this
*/
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.setTxFeeRateInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply} returns this
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.clearTxFeeRateInfo = function() {
  return this.setTxFeeRateInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.hasTxFeeRateInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txFeeRatePreference: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest;
  return proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxFeeRatePreference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxFeeRatePreference();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 tx_fee_rate_preference = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.getTxFeeRatePreference = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} returns this
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.setTxFeeRatePreference = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txFeeRateInfo: (f = msg.getTxFeeRateInfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply;
  return proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxFeeRateInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader);
      msg.setTxFeeRateInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxFeeRateInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo tx_fee_rate_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.getTxFeeRateInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} returns this
*/
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.setTxFeeRateInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} returns this
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.clearTxFeeRateInfo = function() {
  return this.setTxFeeRateInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.hasTxFeeRateInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest;
  return proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txFeeRateInfo: (f = msg.getTxFeeRateInfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply;
  return proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxFeeRateInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader);
      msg.setTxFeeRateInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxFeeRateInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo tx_fee_rate_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.getTxFeeRateInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} returns this
*/
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.setTxFeeRateInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} returns this
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.clearTxFeeRateInfo = function() {
  return this.setTxFeeRateInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.hasTxFeeRateInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTransactionRequest}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTransactionRequest;
  return proto.io.bisq.protobuffer.GetTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTransactionRequest}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tx_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetTransactionRequest} returns this
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTransactionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTransactionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTransactionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInfo: (f = msg.getTxInfo()) && proto.io.bisq.protobuffer.TxInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply}
 */
proto.io.bisq.protobuffer.GetTransactionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTransactionReply;
  return proto.io.bisq.protobuffer.GetTransactionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTransactionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply}
 */
proto.io.bisq.protobuffer.GetTransactionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTransactionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTransactionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTransactionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxInfo tx_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.getTxInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply} returns this
*/
proto.io.bisq.protobuffer.GetTransactionReply.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply} returns this
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetFundingAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesRequest}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetFundingAddressesRequest;
  return proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesRequest}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetFundingAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetFundingAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBalanceInfoList: jspb.Message.toObjectList(msg.getAddressBalanceInfoList(),
    proto.io.bisq.protobuffer.AddressBalanceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetFundingAddressesReply;
  return proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.AddressBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader);
      msg.addAddressBalanceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetFundingAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBalanceInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressBalanceInfo address_balance_info = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.getAddressBalanceInfoList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply} returns this
*/
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.setAddressBalanceInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.addAddressBalanceInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.AddressBalanceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply} returns this
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.clearAddressBalanceInfoList = function() {
  return this.setAddressBalanceInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetWalletPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetWalletPasswordRequest;
  return proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetWalletPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetWalletPasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordReply}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetWalletPasswordReply;
  return proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordReply}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetWalletPasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RemoveWalletPasswordRequest;
  return proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RemoveWalletPasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RemoveWalletPasswordReply;
  return proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.LockWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.LockWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.LockWalletRequest}
 */
proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.LockWalletRequest;
  return proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.LockWalletRequest}
 */
proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.LockWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.LockWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.LockWalletReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.LockWalletReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.LockWalletReply}
 */
proto.io.bisq.protobuffer.LockWalletReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.LockWalletReply;
  return proto.io.bisq.protobuffer.LockWalletReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.LockWalletReply}
 */
proto.io.bisq.protobuffer.LockWalletReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.LockWalletReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.LockWalletReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnlockWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnlockWalletRequest;
  return proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnlockWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest} returns this
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 timeout = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest} returns this
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnlockWalletReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletReply}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnlockWalletReply;
  return proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletReply}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnlockWalletReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BalancesInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BalancesInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    bsq: (f = msg.getBsq()) && proto.io.bisq.protobuffer.BsqBalanceInfo.toObject(includeInstance, f),
    btc: (f = msg.getBtc()) && proto.io.bisq.protobuffer.BtcBalanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BalancesInfo;
  return proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.BsqBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BsqBalanceInfo.deserializeBinaryFromReader);
      msg.setBsq(value);
      break;
    case 2:
      var value = new proto.io.bisq.protobuffer.BtcBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader);
      msg.setBtc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBsq();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.BsqBalanceInfo.serializeBinaryToWriter
    );
  }
  f = message.getBtc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BsqBalanceInfo bsq = 1;
 * @return {?proto.io.bisq.protobuffer.BsqBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getBsq = function() {
  return /** @type{?proto.io.bisq.protobuffer.BsqBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BsqBalanceInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.BsqBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setBsq = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.clearBsq = function() {
  return this.setBsq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.hasBsq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BtcBalanceInfo btc = 2;
 * @return {?proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getBtc = function() {
  return /** @type{?proto.io.bisq.protobuffer.BtcBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BtcBalanceInfo, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.BtcBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setBtc = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.clearBtc = function() {
  return this.setBtc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.hasBtc = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BsqBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BsqBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableConfirmedBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    unverifiedBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unconfirmedChangeBalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lockedForVotingBalance: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lockupBondsBalance: jspb.Message.getFieldWithDefault(msg, 5, 0),
    unlockingBondsBalance: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BsqBalanceInfo;
  return proto.io.bisq.protobuffer.BsqBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BsqBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailableConfirmedBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnverifiedBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnconfirmedChangeBalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockedForVotingBalance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockupBondsBalance(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnlockingBondsBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BsqBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BsqBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableConfirmedBalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUnverifiedBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUnconfirmedChangeBalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLockedForVotingBalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getLockupBondsBalance();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getUnlockingBondsBalance();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional uint64 available_confirmed_balance = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getAvailableConfirmedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setAvailableConfirmedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 unverified_balance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getUnverifiedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setUnverifiedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 unconfirmed_change_balance = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getUnconfirmedChangeBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setUnconfirmedChangeBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 locked_for_voting_balance = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getLockedForVotingBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setLockedForVotingBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 lockup_bonds_balance = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getLockupBondsBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setLockupBondsBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 unlocking_bonds_balance = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getUnlockingBondsBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setUnlockingBondsBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BtcBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reservedBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalAvailableBalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lockedBalance: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BtcBalanceInfo;
  return proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailableBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReservedBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalAvailableBalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockedBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getReservedBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLockedBalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 available_balance = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 reserved_balance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getReservedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setReservedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_available_balance = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getTotalAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setTotalAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 locked_balance = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getLockedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setLockedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AddressBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numConfirmations: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isAddressUnused: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AddressBalanceInfo;
  return proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumConfirmations(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAddressUnused(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNumConfirmations();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIsAddressUnused();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 balance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 num_confirmations = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getNumConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setNumConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_address_unused = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getIsAddressUnused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setIsAddressUnused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetVersionRequest}
 */
proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetVersionRequest;
  return proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetVersionRequest}
 */
proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetVersionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetVersionReply}
 */
proto.io.bisq.protobuffer.GetVersionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetVersionReply;
  return proto.io.bisq.protobuffer.GetVersionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetVersionReply}
 */
proto.io.bisq.protobuffer.GetVersionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetVersionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetVersionReply} returns this
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.io.bisq.protobuffer);
