// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// This file is part of Bisq.
//
// Bisq is free software: you can redistribute it and/or modify it
// under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or (at
// your option) any later version.
//
// Bisq is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public
// License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with Bisq. If not, see <http://www.gnu.org/licenses/>.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var grpc_pb = require('./grpc_pb.js');
var pb_pb = require('./pb_pb.js');

function serialize_io_bisq_protobuffer_CancelOfferReply(arg) {
  if (!(arg instanceof grpc_pb.CancelOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CancelOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CancelOfferReply(buffer_arg) {
  return grpc_pb.CancelOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CancelOfferRequest(arg) {
  if (!(arg instanceof grpc_pb.CancelOfferRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CancelOfferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CancelOfferRequest(buffer_arg) {
  return grpc_pb.CancelOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CloseTradeReply(arg) {
  if (!(arg instanceof grpc_pb.CloseTradeReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CloseTradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CloseTradeReply(buffer_arg) {
  return grpc_pb.CloseTradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CloseTradeRequest(arg) {
  if (!(arg instanceof grpc_pb.CloseTradeRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CloseTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CloseTradeRequest(buffer_arg) {
  return grpc_pb.CloseTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_ConfirmPaymentReceivedReply(arg) {
  if (!(arg instanceof grpc_pb.ConfirmPaymentReceivedReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.ConfirmPaymentReceivedReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_ConfirmPaymentReceivedReply(buffer_arg) {
  return grpc_pb.ConfirmPaymentReceivedReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_ConfirmPaymentReceivedRequest(arg) {
  if (!(arg instanceof grpc_pb.ConfirmPaymentReceivedRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.ConfirmPaymentReceivedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_ConfirmPaymentReceivedRequest(buffer_arg) {
  return grpc_pb.ConfirmPaymentReceivedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_ConfirmPaymentStartedReply(arg) {
  if (!(arg instanceof grpc_pb.ConfirmPaymentStartedReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.ConfirmPaymentStartedReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_ConfirmPaymentStartedReply(buffer_arg) {
  return grpc_pb.ConfirmPaymentStartedReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_ConfirmPaymentStartedRequest(arg) {
  if (!(arg instanceof grpc_pb.ConfirmPaymentStartedRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.ConfirmPaymentStartedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_ConfirmPaymentStartedRequest(buffer_arg) {
  return grpc_pb.ConfirmPaymentStartedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CreateBsqSwapOfferReply(arg) {
  if (!(arg instanceof grpc_pb.CreateBsqSwapOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CreateBsqSwapOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CreateBsqSwapOfferReply(buffer_arg) {
  return grpc_pb.CreateBsqSwapOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CreateBsqSwapOfferRequest(arg) {
  if (!(arg instanceof grpc_pb.CreateBsqSwapOfferRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CreateBsqSwapOfferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CreateBsqSwapOfferRequest(buffer_arg) {
  return grpc_pb.CreateBsqSwapOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CreateCryptoCurrencyPaymentAccountReply(arg) {
  if (!(arg instanceof grpc_pb.CreateCryptoCurrencyPaymentAccountReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CreateCryptoCurrencyPaymentAccountReply(buffer_arg) {
  return grpc_pb.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CreateCryptoCurrencyPaymentAccountRequest(arg) {
  if (!(arg instanceof grpc_pb.CreateCryptoCurrencyPaymentAccountRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CreateCryptoCurrencyPaymentAccountRequest(buffer_arg) {
  return grpc_pb.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CreateOfferReply(arg) {
  if (!(arg instanceof grpc_pb.CreateOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CreateOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CreateOfferReply(buffer_arg) {
  return grpc_pb.CreateOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CreateOfferRequest(arg) {
  if (!(arg instanceof grpc_pb.CreateOfferRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CreateOfferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CreateOfferRequest(buffer_arg) {
  return grpc_pb.CreateOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CreatePaymentAccountReply(arg) {
  if (!(arg instanceof grpc_pb.CreatePaymentAccountReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CreatePaymentAccountReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CreatePaymentAccountReply(buffer_arg) {
  return grpc_pb.CreatePaymentAccountReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_CreatePaymentAccountRequest(arg) {
  if (!(arg instanceof grpc_pb.CreatePaymentAccountRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.CreatePaymentAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_CreatePaymentAccountRequest(buffer_arg) {
  return grpc_pb.CreatePaymentAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_EditOfferReply(arg) {
  if (!(arg instanceof grpc_pb.EditOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.EditOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_EditOfferReply(buffer_arg) {
  return grpc_pb.EditOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_EditOfferRequest(arg) {
  if (!(arg instanceof grpc_pb.EditOfferRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.EditOfferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_EditOfferRequest(buffer_arg) {
  return grpc_pb.EditOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_FailTradeReply(arg) {
  if (!(arg instanceof grpc_pb.FailTradeReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.FailTradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_FailTradeReply(buffer_arg) {
  return grpc_pb.FailTradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_FailTradeRequest(arg) {
  if (!(arg instanceof grpc_pb.FailTradeRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.FailTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_FailTradeRequest(buffer_arg) {
  return grpc_pb.FailTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetAddressBalanceReply(arg) {
  if (!(arg instanceof grpc_pb.GetAddressBalanceReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetAddressBalanceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetAddressBalanceReply(buffer_arg) {
  return grpc_pb.GetAddressBalanceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetAddressBalanceRequest(arg) {
  if (!(arg instanceof grpc_pb.GetAddressBalanceRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetAddressBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetAddressBalanceRequest(buffer_arg) {
  return grpc_pb.GetAddressBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetAverageBsqTradePriceReply(arg) {
  if (!(arg instanceof grpc_pb.GetAverageBsqTradePriceReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetAverageBsqTradePriceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetAverageBsqTradePriceReply(buffer_arg) {
  return grpc_pb.GetAverageBsqTradePriceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetAverageBsqTradePriceRequest(arg) {
  if (!(arg instanceof grpc_pb.GetAverageBsqTradePriceRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetAverageBsqTradePriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetAverageBsqTradePriceRequest(buffer_arg) {
  return grpc_pb.GetAverageBsqTradePriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetBalancesReply(arg) {
  if (!(arg instanceof grpc_pb.GetBalancesReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetBalancesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetBalancesReply(buffer_arg) {
  return grpc_pb.GetBalancesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetBalancesRequest(arg) {
  if (!(arg instanceof grpc_pb.GetBalancesRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetBalancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetBalancesRequest(buffer_arg) {
  return grpc_pb.GetBalancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetBsqSwapOfferReply(arg) {
  if (!(arg instanceof grpc_pb.GetBsqSwapOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetBsqSwapOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetBsqSwapOfferReply(buffer_arg) {
  return grpc_pb.GetBsqSwapOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetBsqSwapOffersReply(arg) {
  if (!(arg instanceof grpc_pb.GetBsqSwapOffersReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetBsqSwapOffersReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetBsqSwapOffersReply(buffer_arg) {
  return grpc_pb.GetBsqSwapOffersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetBsqSwapOffersRequest(arg) {
  if (!(arg instanceof grpc_pb.GetBsqSwapOffersRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetBsqSwapOffersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetBsqSwapOffersRequest(buffer_arg) {
  return grpc_pb.GetBsqSwapOffersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetCryptoCurrencyPaymentMethodsReply(arg) {
  if (!(arg instanceof grpc_pb.GetCryptoCurrencyPaymentMethodsReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetCryptoCurrencyPaymentMethodsReply(buffer_arg) {
  return grpc_pb.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetCryptoCurrencyPaymentMethodsRequest(arg) {
  if (!(arg instanceof grpc_pb.GetCryptoCurrencyPaymentMethodsRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetCryptoCurrencyPaymentMethodsRequest(buffer_arg) {
  return grpc_pb.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetFundingAddressesReply(arg) {
  if (!(arg instanceof grpc_pb.GetFundingAddressesReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetFundingAddressesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetFundingAddressesReply(buffer_arg) {
  return grpc_pb.GetFundingAddressesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetFundingAddressesRequest(arg) {
  if (!(arg instanceof grpc_pb.GetFundingAddressesRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetFundingAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetFundingAddressesRequest(buffer_arg) {
  return grpc_pb.GetFundingAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetMethodHelpReply(arg) {
  if (!(arg instanceof grpc_pb.GetMethodHelpReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetMethodHelpReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetMethodHelpReply(buffer_arg) {
  return grpc_pb.GetMethodHelpReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetMethodHelpRequest(arg) {
  if (!(arg instanceof grpc_pb.GetMethodHelpRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetMethodHelpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetMethodHelpRequest(buffer_arg) {
  return grpc_pb.GetMethodHelpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetMyBsqSwapOfferReply(arg) {
  if (!(arg instanceof grpc_pb.GetMyBsqSwapOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetMyBsqSwapOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetMyBsqSwapOfferReply(buffer_arg) {
  return grpc_pb.GetMyBsqSwapOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetMyBsqSwapOffersReply(arg) {
  if (!(arg instanceof grpc_pb.GetMyBsqSwapOffersReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetMyBsqSwapOffersReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetMyBsqSwapOffersReply(buffer_arg) {
  return grpc_pb.GetMyBsqSwapOffersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetMyOfferReply(arg) {
  if (!(arg instanceof grpc_pb.GetMyOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetMyOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetMyOfferReply(buffer_arg) {
  return grpc_pb.GetMyOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetMyOfferRequest(arg) {
  if (!(arg instanceof grpc_pb.GetMyOfferRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetMyOfferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetMyOfferRequest(buffer_arg) {
  return grpc_pb.GetMyOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetMyOffersReply(arg) {
  if (!(arg instanceof grpc_pb.GetMyOffersReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetMyOffersReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetMyOffersReply(buffer_arg) {
  return grpc_pb.GetMyOffersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetMyOffersRequest(arg) {
  if (!(arg instanceof grpc_pb.GetMyOffersRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetMyOffersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetMyOffersRequest(buffer_arg) {
  return grpc_pb.GetMyOffersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetNetworkReply(arg) {
  if (!(arg instanceof grpc_pb.GetNetworkReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetNetworkReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetNetworkReply(buffer_arg) {
  return grpc_pb.GetNetworkReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetNetworkRequest(arg) {
  if (!(arg instanceof grpc_pb.GetNetworkRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetNetworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetNetworkRequest(buffer_arg) {
  return grpc_pb.GetNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetOfferCategoryReply(arg) {
  if (!(arg instanceof grpc_pb.GetOfferCategoryReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetOfferCategoryReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetOfferCategoryReply(buffer_arg) {
  return grpc_pb.GetOfferCategoryReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetOfferCategoryRequest(arg) {
  if (!(arg instanceof grpc_pb.GetOfferCategoryRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetOfferCategoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetOfferCategoryRequest(buffer_arg) {
  return grpc_pb.GetOfferCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetOfferReply(arg) {
  if (!(arg instanceof grpc_pb.GetOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetOfferReply(buffer_arg) {
  return grpc_pb.GetOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetOfferRequest(arg) {
  if (!(arg instanceof grpc_pb.GetOfferRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetOfferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetOfferRequest(buffer_arg) {
  return grpc_pb.GetOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetOffersReply(arg) {
  if (!(arg instanceof grpc_pb.GetOffersReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetOffersReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetOffersReply(buffer_arg) {
  return grpc_pb.GetOffersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetOffersRequest(arg) {
  if (!(arg instanceof grpc_pb.GetOffersRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetOffersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetOffersRequest(buffer_arg) {
  return grpc_pb.GetOffersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetPaymentAccountFormReply(arg) {
  if (!(arg instanceof grpc_pb.GetPaymentAccountFormReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetPaymentAccountFormReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetPaymentAccountFormReply(buffer_arg) {
  return grpc_pb.GetPaymentAccountFormReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetPaymentAccountFormRequest(arg) {
  if (!(arg instanceof grpc_pb.GetPaymentAccountFormRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetPaymentAccountFormRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetPaymentAccountFormRequest(buffer_arg) {
  return grpc_pb.GetPaymentAccountFormRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetPaymentAccountsReply(arg) {
  if (!(arg instanceof grpc_pb.GetPaymentAccountsReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetPaymentAccountsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetPaymentAccountsReply(buffer_arg) {
  return grpc_pb.GetPaymentAccountsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetPaymentAccountsRequest(arg) {
  if (!(arg instanceof grpc_pb.GetPaymentAccountsRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetPaymentAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetPaymentAccountsRequest(buffer_arg) {
  return grpc_pb.GetPaymentAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetPaymentMethodsReply(arg) {
  if (!(arg instanceof grpc_pb.GetPaymentMethodsReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetPaymentMethodsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetPaymentMethodsReply(buffer_arg) {
  return grpc_pb.GetPaymentMethodsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetPaymentMethodsRequest(arg) {
  if (!(arg instanceof grpc_pb.GetPaymentMethodsRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetPaymentMethodsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetPaymentMethodsRequest(buffer_arg) {
  return grpc_pb.GetPaymentMethodsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetTradeReply(arg) {
  if (!(arg instanceof grpc_pb.GetTradeReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetTradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetTradeReply(buffer_arg) {
  return grpc_pb.GetTradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetTradeRequest(arg) {
  if (!(arg instanceof grpc_pb.GetTradeRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetTradeRequest(buffer_arg) {
  return grpc_pb.GetTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetTradesReply(arg) {
  if (!(arg instanceof grpc_pb.GetTradesReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetTradesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetTradesReply(buffer_arg) {
  return grpc_pb.GetTradesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetTradesRequest(arg) {
  if (!(arg instanceof grpc_pb.GetTradesRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetTradesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetTradesRequest(buffer_arg) {
  return grpc_pb.GetTradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetTransactionReply(arg) {
  if (!(arg instanceof grpc_pb.GetTransactionReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetTransactionReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetTransactionReply(buffer_arg) {
  return grpc_pb.GetTransactionReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetTransactionRequest(arg) {
  if (!(arg instanceof grpc_pb.GetTransactionRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetTransactionRequest(buffer_arg) {
  return grpc_pb.GetTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetTxFeeRateReply(arg) {
  if (!(arg instanceof grpc_pb.GetTxFeeRateReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetTxFeeRateReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetTxFeeRateReply(buffer_arg) {
  return grpc_pb.GetTxFeeRateReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetTxFeeRateRequest(arg) {
  if (!(arg instanceof grpc_pb.GetTxFeeRateRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetTxFeeRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetTxFeeRateRequest(buffer_arg) {
  return grpc_pb.GetTxFeeRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetUnusedBsqAddressReply(arg) {
  if (!(arg instanceof grpc_pb.GetUnusedBsqAddressReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetUnusedBsqAddressReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetUnusedBsqAddressReply(buffer_arg) {
  return grpc_pb.GetUnusedBsqAddressReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetUnusedBsqAddressRequest(arg) {
  if (!(arg instanceof grpc_pb.GetUnusedBsqAddressRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetUnusedBsqAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetUnusedBsqAddressRequest(buffer_arg) {
  return grpc_pb.GetUnusedBsqAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetVersionReply(arg) {
  if (!(arg instanceof grpc_pb.GetVersionReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetVersionReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetVersionReply(buffer_arg) {
  return grpc_pb.GetVersionReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_GetVersionRequest(arg) {
  if (!(arg instanceof grpc_pb.GetVersionRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.GetVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_GetVersionRequest(buffer_arg) {
  return grpc_pb.GetVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_LockWalletReply(arg) {
  if (!(arg instanceof grpc_pb.LockWalletReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.LockWalletReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_LockWalletReply(buffer_arg) {
  return grpc_pb.LockWalletReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_LockWalletRequest(arg) {
  if (!(arg instanceof grpc_pb.LockWalletRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.LockWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_LockWalletRequest(buffer_arg) {
  return grpc_pb.LockWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_MarketPriceReply(arg) {
  if (!(arg instanceof grpc_pb.MarketPriceReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.MarketPriceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_MarketPriceReply(buffer_arg) {
  return grpc_pb.MarketPriceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_MarketPriceRequest(arg) {
  if (!(arg instanceof grpc_pb.MarketPriceRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.MarketPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_MarketPriceRequest(buffer_arg) {
  return grpc_pb.MarketPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_RegisterDisputeAgentReply(arg) {
  if (!(arg instanceof grpc_pb.RegisterDisputeAgentReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.RegisterDisputeAgentReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_RegisterDisputeAgentReply(buffer_arg) {
  return grpc_pb.RegisterDisputeAgentReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_RegisterDisputeAgentRequest(arg) {
  if (!(arg instanceof grpc_pb.RegisterDisputeAgentRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.RegisterDisputeAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_RegisterDisputeAgentRequest(buffer_arg) {
  return grpc_pb.RegisterDisputeAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_RemoveWalletPasswordReply(arg) {
  if (!(arg instanceof grpc_pb.RemoveWalletPasswordReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.RemoveWalletPasswordReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_RemoveWalletPasswordReply(buffer_arg) {
  return grpc_pb.RemoveWalletPasswordReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_RemoveWalletPasswordRequest(arg) {
  if (!(arg instanceof grpc_pb.RemoveWalletPasswordRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.RemoveWalletPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_RemoveWalletPasswordRequest(buffer_arg) {
  return grpc_pb.RemoveWalletPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_SendBsqReply(arg) {
  if (!(arg instanceof grpc_pb.SendBsqReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.SendBsqReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_SendBsqReply(buffer_arg) {
  return grpc_pb.SendBsqReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_SendBsqRequest(arg) {
  if (!(arg instanceof grpc_pb.SendBsqRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.SendBsqRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_SendBsqRequest(buffer_arg) {
  return grpc_pb.SendBsqRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_SendBtcReply(arg) {
  if (!(arg instanceof grpc_pb.SendBtcReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.SendBtcReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_SendBtcReply(buffer_arg) {
  return grpc_pb.SendBtcReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_SendBtcRequest(arg) {
  if (!(arg instanceof grpc_pb.SendBtcRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.SendBtcRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_SendBtcRequest(buffer_arg) {
  return grpc_pb.SendBtcRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_SetTxFeeRatePreferenceReply(arg) {
  if (!(arg instanceof grpc_pb.SetTxFeeRatePreferenceReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.SetTxFeeRatePreferenceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_SetTxFeeRatePreferenceReply(buffer_arg) {
  return grpc_pb.SetTxFeeRatePreferenceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_SetTxFeeRatePreferenceRequest(arg) {
  if (!(arg instanceof grpc_pb.SetTxFeeRatePreferenceRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.SetTxFeeRatePreferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_SetTxFeeRatePreferenceRequest(buffer_arg) {
  return grpc_pb.SetTxFeeRatePreferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_SetWalletPasswordReply(arg) {
  if (!(arg instanceof grpc_pb.SetWalletPasswordReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.SetWalletPasswordReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_SetWalletPasswordReply(buffer_arg) {
  return grpc_pb.SetWalletPasswordReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_SetWalletPasswordRequest(arg) {
  if (!(arg instanceof grpc_pb.SetWalletPasswordRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.SetWalletPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_SetWalletPasswordRequest(buffer_arg) {
  return grpc_pb.SetWalletPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_StopReply(arg) {
  if (!(arg instanceof grpc_pb.StopReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.StopReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_StopReply(buffer_arg) {
  return grpc_pb.StopReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_StopRequest(arg) {
  if (!(arg instanceof grpc_pb.StopRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.StopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_StopRequest(buffer_arg) {
  return grpc_pb.StopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_TakeOfferReply(arg) {
  if (!(arg instanceof grpc_pb.TakeOfferReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.TakeOfferReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_TakeOfferReply(buffer_arg) {
  return grpc_pb.TakeOfferReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_TakeOfferRequest(arg) {
  if (!(arg instanceof grpc_pb.TakeOfferRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.TakeOfferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_TakeOfferRequest(buffer_arg) {
  return grpc_pb.TakeOfferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_UnFailTradeReply(arg) {
  if (!(arg instanceof grpc_pb.UnFailTradeReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.UnFailTradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_UnFailTradeReply(buffer_arg) {
  return grpc_pb.UnFailTradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_UnFailTradeRequest(arg) {
  if (!(arg instanceof grpc_pb.UnFailTradeRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.UnFailTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_UnFailTradeRequest(buffer_arg) {
  return grpc_pb.UnFailTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_UnlockWalletReply(arg) {
  if (!(arg instanceof grpc_pb.UnlockWalletReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.UnlockWalletReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_UnlockWalletReply(buffer_arg) {
  return grpc_pb.UnlockWalletReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_UnlockWalletRequest(arg) {
  if (!(arg instanceof grpc_pb.UnlockWalletRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.UnlockWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_UnlockWalletRequest(buffer_arg) {
  return grpc_pb.UnlockWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_UnsetTxFeeRatePreferenceReply(arg) {
  if (!(arg instanceof grpc_pb.UnsetTxFeeRatePreferenceReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_UnsetTxFeeRatePreferenceReply(buffer_arg) {
  return grpc_pb.UnsetTxFeeRatePreferenceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_UnsetTxFeeRatePreferenceRequest(arg) {
  if (!(arg instanceof grpc_pb.UnsetTxFeeRatePreferenceRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_UnsetTxFeeRatePreferenceRequest(buffer_arg) {
  return grpc_pb.UnsetTxFeeRatePreferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_VerifyBsqSentToAddressReply(arg) {
  if (!(arg instanceof grpc_pb.VerifyBsqSentToAddressReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.VerifyBsqSentToAddressReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_VerifyBsqSentToAddressReply(buffer_arg) {
  return grpc_pb.VerifyBsqSentToAddressReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_VerifyBsqSentToAddressRequest(arg) {
  if (!(arg instanceof grpc_pb.VerifyBsqSentToAddressRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.VerifyBsqSentToAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_VerifyBsqSentToAddressRequest(buffer_arg) {
  return grpc_pb.VerifyBsqSentToAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_WithdrawFundsReply(arg) {
  if (!(arg instanceof grpc_pb.WithdrawFundsReply)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.WithdrawFundsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_WithdrawFundsReply(buffer_arg) {
  return grpc_pb.WithdrawFundsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_io_bisq_protobuffer_WithdrawFundsRequest(arg) {
  if (!(arg instanceof grpc_pb.WithdrawFundsRequest)) {
    throw new Error('Expected argument of type io.bisq.protobuffer.WithdrawFundsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_io_bisq_protobuffer_WithdrawFundsRequest(buffer_arg) {
  return grpc_pb.WithdrawFundsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// The DisputeAgents service is provided for development only;  it can only be used when running in regtest mode.
var DisputeAgentsService = exports.DisputeAgentsService = {
  // Register regtest / dev mode dispute agents.  Does not work when running on mainnet.
registerDisputeAgent: {
    path: '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.RegisterDisputeAgentRequest,
    responseType: grpc_pb.RegisterDisputeAgentReply,
    requestSerialize: serialize_io_bisq_protobuffer_RegisterDisputeAgentRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_RegisterDisputeAgentRequest,
    responseSerialize: serialize_io_bisq_protobuffer_RegisterDisputeAgentReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_RegisterDisputeAgentReply,
  },
};

exports.DisputeAgentsClient = grpc.makeGenericClientConstructor(DisputeAgentsService);
var HelpService = exports.HelpService = {
  // Returns a CLI command man page.
getMethodHelp: {
    path: '/io.bisq.protobuffer.Help/GetMethodHelp',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetMethodHelpRequest,
    responseType: grpc_pb.GetMethodHelpReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetMethodHelpRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetMethodHelpRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetMethodHelpReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetMethodHelpReply,
  },
};

exports.HelpClient = grpc.makeGenericClientConstructor(HelpService);
//
// The Offers service provides rpc methods for creating, editing, listing, and cancelling Bisq offers.
var OffersService = exports.OffersService = {
  // Get an offer's category, one of  FIAT, ALTCOIN, or BSQ_SWAP.  This information is needed before an offer
// can be taken, and is used by a client to determine what kind of offer to take:  a v1 FIAT or ALTCOIN offer,
// or a BSQ swap offer.  V1 and BSQ swap trades are handled differently in the API daemon.
getOfferCategory: {
    path: '/io.bisq.protobuffer.Offers/GetOfferCategory',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetOfferCategoryRequest,
    responseType: grpc_pb.GetOfferCategoryReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetOfferCategoryRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetOfferCategoryRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetOfferCategoryReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetOfferCategoryReply,
  },
  // Get the available BSQ swap offer with offer-id.
getBsqSwapOffer: {
    path: '/io.bisq.protobuffer.Offers/GetBsqSwapOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetOfferRequest,
    responseType: grpc_pb.GetBsqSwapOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetBsqSwapOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetBsqSwapOfferReply,
  },
  // Get the v1 protocol offer with an offer-id.  Your node must have a payment account with the same
// payment method as the offer's associated payment method, e,g., ACH_TRANSFER, CASH_DEPOSIT, etc.
getOffer: {
    path: '/io.bisq.protobuffer.Offers/GetOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetOfferRequest,
    responseType: grpc_pb.GetOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetOfferReply,
  },
  // Get user's BSQ swap offer with offer-id.
getMyBsqSwapOffer: {
    path: '/io.bisq.protobuffer.Offers/GetMyBsqSwapOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetMyOfferRequest,
    responseType: grpc_pb.GetMyBsqSwapOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetMyOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetMyOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetMyBsqSwapOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetMyBsqSwapOfferReply,
  },
  // Get my open v1 protocol offer with offer-id.  Deprecated since 27-Dec-2021 (v1.8.0).  Use GetOffer.
getMyOffer: {
    path: '/io.bisq.protobuffer.Offers/GetMyOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetMyOfferRequest,
    responseType: grpc_pb.GetMyOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetMyOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetMyOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetMyOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetMyOfferReply,
  },
  // Get all available BSQ swap offers with a BUY (BTC) or SELL (BTC) direction.
getBsqSwapOffers: {
    path: '/io.bisq.protobuffer.Offers/GetBsqSwapOffers',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetBsqSwapOffersRequest,
    responseType: grpc_pb.GetBsqSwapOffersReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetBsqSwapOffersRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetBsqSwapOffersRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetBsqSwapOffersReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetBsqSwapOffersReply,
  },
  // Get all available v1 protocol offers with a BUY (BTC) or SELL (BTC) direction.  The returned offers
// are restricted to those associated with payment methods matching the payment methods you have set up
// on your node, e,g., NATIONAL_BANK, US_POSTAL_MONEY_ORDER, etc.
getOffers: {
    path: '/io.bisq.protobuffer.Offers/GetOffers',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetOffersRequest,
    responseType: grpc_pb.GetOffersReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetOffersRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetOffersRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetOffersReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetOffersReply,
  },
  // Get all user's BSQ swap offers with a BUY (BTC) or SELL (BTC) direction.
getMyBsqSwapOffers: {
    path: '/io.bisq.protobuffer.Offers/GetMyBsqSwapOffers',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetBsqSwapOffersRequest,
    responseType: grpc_pb.GetMyBsqSwapOffersReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetBsqSwapOffersRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetBsqSwapOffersRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetMyBsqSwapOffersReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetMyBsqSwapOffersReply,
  },
  // Get all user's open v1 protocol offers with a BUY (BTC) or SELL (BTC) direction.
getMyOffers: {
    path: '/io.bisq.protobuffer.Offers/GetMyOffers',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetMyOffersRequest,
    responseType: grpc_pb.GetMyOffersReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetMyOffersRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetMyOffersRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetMyOffersReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetMyOffersReply,
  },
  // Create a BSQ swap offer.
createBsqSwapOffer: {
    path: '/io.bisq.protobuffer.Offers/CreateBsqSwapOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.CreateBsqSwapOfferRequest,
    responseType: grpc_pb.CreateBsqSwapOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_CreateBsqSwapOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_CreateBsqSwapOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_CreateBsqSwapOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_CreateBsqSwapOfferReply,
  },
  // Create a v1 protocol offer.
createOffer: {
    path: '/io.bisq.protobuffer.Offers/CreateOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.CreateOfferRequest,
    responseType: grpc_pb.CreateOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_CreateOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_CreateOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_CreateOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_CreateOfferReply,
  },
  // Edit an open offer.
editOffer: {
    path: '/io.bisq.protobuffer.Offers/EditOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.EditOfferRequest,
    responseType: grpc_pb.EditOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_EditOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_EditOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_EditOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_EditOfferReply,
  },
  // Cancel an open offer;  remove it from the offer book.
cancelOffer: {
    path: '/io.bisq.protobuffer.Offers/CancelOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.CancelOfferRequest,
    responseType: grpc_pb.CancelOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_CancelOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_CancelOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_CancelOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_CancelOfferReply,
  },
};

exports.OffersClient = grpc.makeGenericClientConstructor(OffersService);
//
// The PaymentAccounts service provides rpc methods for creating fiat and crypto currency payment accounts.
var PaymentAccountsService = exports.PaymentAccountsService = {
  // Create a fiat payment account, providing details in a json form generated by rpc method GetPaymentAccountForm.
createPaymentAccount: {
    path: '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.CreatePaymentAccountRequest,
    responseType: grpc_pb.CreatePaymentAccountReply,
    requestSerialize: serialize_io_bisq_protobuffer_CreatePaymentAccountRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_CreatePaymentAccountRequest,
    responseSerialize: serialize_io_bisq_protobuffer_CreatePaymentAccountReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_CreatePaymentAccountReply,
  },
  // Get list of all saved fiat payment accounts.
getPaymentAccounts: {
    path: '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetPaymentAccountsRequest,
    responseType: grpc_pb.GetPaymentAccountsReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetPaymentAccountsRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetPaymentAccountsRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetPaymentAccountsReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetPaymentAccountsReply,
  },
  // Get list of all supported Bisq payment methods.
getPaymentMethods: {
    path: '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetPaymentMethodsRequest,
    responseType: grpc_pb.GetPaymentMethodsReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetPaymentMethodsRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetPaymentMethodsRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetPaymentMethodsReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetPaymentMethodsReply,
  },
  // Get a json template file for a supported Bisq payment method.  Fill in the form and call rpc method CreatePaymentAccount.
getPaymentAccountForm: {
    path: '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetPaymentAccountFormRequest,
    responseType: grpc_pb.GetPaymentAccountFormReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetPaymentAccountFormRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetPaymentAccountFormRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetPaymentAccountFormReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetPaymentAccountFormReply,
  },
  // Create a crypto currency (altcoin) payment account.
createCryptoCurrencyPaymentAccount: {
    path: '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest,
    responseType: grpc_pb.CreateCryptoCurrencyPaymentAccountReply,
    requestSerialize: serialize_io_bisq_protobuffer_CreateCryptoCurrencyPaymentAccountRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_CreateCryptoCurrencyPaymentAccountRequest,
    responseSerialize: serialize_io_bisq_protobuffer_CreateCryptoCurrencyPaymentAccountReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_CreateCryptoCurrencyPaymentAccountReply,
  },
  // Get list of all supported Bisq crypto currency (altcoin) payment methods.
getCryptoCurrencyPaymentMethods: {
    path: '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest,
    responseType: grpc_pb.GetCryptoCurrencyPaymentMethodsReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetCryptoCurrencyPaymentMethodsRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetCryptoCurrencyPaymentMethodsRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetCryptoCurrencyPaymentMethodsReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetCryptoCurrencyPaymentMethodsReply,
  },
};

exports.PaymentAccountsClient = grpc.makeGenericClientConstructor(PaymentAccountsService);
var PriceService = exports.PriceService = {
  // Get the current market price for a crypto currency.
getMarketPrice: {
    path: '/io.bisq.protobuffer.Price/GetMarketPrice',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.MarketPriceRequest,
    responseType: grpc_pb.MarketPriceReply,
    requestSerialize: serialize_io_bisq_protobuffer_MarketPriceRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_MarketPriceRequest,
    responseSerialize: serialize_io_bisq_protobuffer_MarketPriceReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_MarketPriceReply,
  },
  // Get the volume weighted average trade price for BSQ, calculated over N days.
// The response contains the average BSQ trade price in USD to 4 decimal places, and in BTC to 8 decimal places.
getAverageBsqTradePrice: {
    path: '/io.bisq.protobuffer.Price/GetAverageBsqTradePrice',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetAverageBsqTradePriceRequest,
    responseType: grpc_pb.GetAverageBsqTradePriceReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetAverageBsqTradePriceRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetAverageBsqTradePriceRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetAverageBsqTradePriceReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetAverageBsqTradePriceReply,
  },
};

exports.PriceClient = grpc.makeGenericClientConstructor(PriceService);
var ShutdownServerService = exports.ShutdownServerService = {
  // Shut down a local Bisq daemon.
stop: {
    path: '/io.bisq.protobuffer.ShutdownServer/Stop',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.StopRequest,
    responseType: grpc_pb.StopReply,
    requestSerialize: serialize_io_bisq_protobuffer_StopRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_StopRequest,
    responseSerialize: serialize_io_bisq_protobuffer_StopReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_StopReply,
  },
};

exports.ShutdownServerClient = grpc.makeGenericClientConstructor(ShutdownServerService);
//
// The Trades service provides rpc methods for taking, executing, and listing trades.
var TradesService = exports.TradesService = {
  // Get a currently open trade.
getTrade: {
    path: '/io.bisq.protobuffer.Trades/GetTrade',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetTradeRequest,
    responseType: grpc_pb.GetTradeReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetTradeRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetTradeRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetTradeReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetTradeReply,
  },
  // Get currently open, or historical trades (closed or failed).
getTrades: {
    path: '/io.bisq.protobuffer.Trades/GetTrades',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetTradesRequest,
    responseType: grpc_pb.GetTradesReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetTradesRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetTradesRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetTradesReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetTradesReply,
  },
  // Take an available offer.  Your node must have a payment account with the same payment method as
// the offer's payment method, e.g., NATIONAL_BANK, SEPA, SWIFT, etc.
takeOffer: {
    path: '/io.bisq.protobuffer.Trades/TakeOffer',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.TakeOfferRequest,
    responseType: grpc_pb.TakeOfferReply,
    requestSerialize: serialize_io_bisq_protobuffer_TakeOfferRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_TakeOfferRequest,
    responseSerialize: serialize_io_bisq_protobuffer_TakeOfferReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_TakeOfferReply,
  },
  // Send a 'payment started' message to a trading peer (the BTC seller).
confirmPaymentStarted: {
    path: '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.ConfirmPaymentStartedRequest,
    responseType: grpc_pb.ConfirmPaymentStartedReply,
    requestSerialize: serialize_io_bisq_protobuffer_ConfirmPaymentStartedRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_ConfirmPaymentStartedRequest,
    responseSerialize: serialize_io_bisq_protobuffer_ConfirmPaymentStartedReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_ConfirmPaymentStartedReply,
  },
  // Send a 'payment received' message to a trading peer (the BTC buyer).
confirmPaymentReceived: {
    path: '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.ConfirmPaymentReceivedRequest,
    responseType: grpc_pb.ConfirmPaymentReceivedReply,
    requestSerialize: serialize_io_bisq_protobuffer_ConfirmPaymentReceivedRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_ConfirmPaymentReceivedRequest,
    responseSerialize: serialize_io_bisq_protobuffer_ConfirmPaymentReceivedReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_ConfirmPaymentReceivedReply,
  },
  // Close a completed trade;  move it to trade history.
closeTrade: {
    path: '/io.bisq.protobuffer.Trades/CloseTrade',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.CloseTradeRequest,
    responseType: grpc_pb.CloseTradeReply,
    requestSerialize: serialize_io_bisq_protobuffer_CloseTradeRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_CloseTradeRequest,
    responseSerialize: serialize_io_bisq_protobuffer_CloseTradeReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_CloseTradeReply,
  },
  // Fail an open trade.
failTrade: {
    path: '/io.bisq.protobuffer.Trades/FailTrade',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.FailTradeRequest,
    responseType: grpc_pb.FailTradeReply,
    requestSerialize: serialize_io_bisq_protobuffer_FailTradeRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_FailTradeRequest,
    responseSerialize: serialize_io_bisq_protobuffer_FailTradeReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_FailTradeReply,
  },
  // Unfail a failed trade.
unFailTrade: {
    path: '/io.bisq.protobuffer.Trades/UnFailTrade',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.UnFailTradeRequest,
    responseType: grpc_pb.UnFailTradeReply,
    requestSerialize: serialize_io_bisq_protobuffer_UnFailTradeRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_UnFailTradeRequest,
    responseSerialize: serialize_io_bisq_protobuffer_UnFailTradeReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_UnFailTradeReply,
  },
  // Withdraw trade proceeds to an external bitcoin wallet address.
withdrawFunds: {
    path: '/io.bisq.protobuffer.Trades/WithdrawFunds',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.WithdrawFundsRequest,
    responseType: grpc_pb.WithdrawFundsReply,
    requestSerialize: serialize_io_bisq_protobuffer_WithdrawFundsRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_WithdrawFundsRequest,
    responseSerialize: serialize_io_bisq_protobuffer_WithdrawFundsReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_WithdrawFundsReply,
  },
};

exports.TradesClient = grpc.makeGenericClientConstructor(TradesService);
//
// The Wallets service provides rpc methods for basic wallet operations such as checking balances,
// sending BTC or BSQ to external wallets, checking transaction fee rates, setting or unsetting
// an encryption password on a a wallet, and unlocking / locking an encrypted wallet.
var WalletsService = exports.WalletsService = {
  // Get the name of the BTC / BSQ network (mainnet, testnet3, or regtest).
getNetwork: {
    path: '/io.bisq.protobuffer.Wallets/GetNetwork',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetNetworkRequest,
    responseType: grpc_pb.GetNetworkReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetNetworkRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetNetworkRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetNetworkReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetNetworkReply,
  },
  // Get the Bisq wallet's current BSQ and BTC balances.
getBalances: {
    path: '/io.bisq.protobuffer.Wallets/GetBalances',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetBalancesRequest,
    responseType: grpc_pb.GetBalancesReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetBalancesRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetBalancesRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetBalancesReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetBalancesReply,
  },
  // Get BTC balance for a wallet address.
getAddressBalance: {
    path: '/io.bisq.protobuffer.Wallets/GetAddressBalance',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetAddressBalanceRequest,
    responseType: grpc_pb.GetAddressBalanceReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetAddressBalanceRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetAddressBalanceRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetAddressBalanceReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetAddressBalanceReply,
  },
  // Get an unused BSQ wallet address.
getUnusedBsqAddress: {
    path: '/io.bisq.protobuffer.Wallets/GetUnusedBsqAddress',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetUnusedBsqAddressRequest,
    responseType: grpc_pb.GetUnusedBsqAddressReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetUnusedBsqAddressRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetUnusedBsqAddressRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetUnusedBsqAddressReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetUnusedBsqAddressReply,
  },
  // Send an amount of BSQ to an external address.
sendBsq: {
    path: '/io.bisq.protobuffer.Wallets/SendBsq',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.SendBsqRequest,
    responseType: grpc_pb.SendBsqReply,
    requestSerialize: serialize_io_bisq_protobuffer_SendBsqRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_SendBsqRequest,
    responseSerialize: serialize_io_bisq_protobuffer_SendBsqReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_SendBsqReply,
  },
  // Send an amount of BTC to an external address.
sendBtc: {
    path: '/io.bisq.protobuffer.Wallets/SendBtc',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.SendBtcRequest,
    responseType: grpc_pb.SendBtcReply,
    requestSerialize: serialize_io_bisq_protobuffer_SendBtcRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_SendBtcRequest,
    responseSerialize: serialize_io_bisq_protobuffer_SendBtcReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_SendBtcReply,
  },
  // Verify a specific amount of BSQ was received by a BSQ wallet address.
// This is a problematic way of verifying BSQ payment has been received for a v1 trade protocol BSQ-BTC trade,
// which has been solved by the introduction of BSQ swap trades, which use a different, unused BSQ address for each trade.
verifyBsqSentToAddress: {
    path: '/io.bisq.protobuffer.Wallets/VerifyBsqSentToAddress',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.VerifyBsqSentToAddressRequest,
    responseType: grpc_pb.VerifyBsqSentToAddressReply,
    requestSerialize: serialize_io_bisq_protobuffer_VerifyBsqSentToAddressRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_VerifyBsqSentToAddressRequest,
    responseSerialize: serialize_io_bisq_protobuffer_VerifyBsqSentToAddressReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_VerifyBsqSentToAddressReply,
  },
  // Get the Bisq network's most recently available bitcoin miner transaction fee rate, or custom fee rate if set.
getTxFeeRate: {
    path: '/io.bisq.protobuffer.Wallets/GetTxFeeRate',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetTxFeeRateRequest,
    responseType: grpc_pb.GetTxFeeRateReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetTxFeeRateRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetTxFeeRateRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetTxFeeRateReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetTxFeeRateReply,
  },
  // Set the Bisq daemon's custom bitcoin miner transaction fee rate, in sats/byte.
setTxFeeRatePreference: {
    path: '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.SetTxFeeRatePreferenceRequest,
    responseType: grpc_pb.SetTxFeeRatePreferenceReply,
    requestSerialize: serialize_io_bisq_protobuffer_SetTxFeeRatePreferenceRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_SetTxFeeRatePreferenceRequest,
    responseSerialize: serialize_io_bisq_protobuffer_SetTxFeeRatePreferenceReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_SetTxFeeRatePreferenceReply,
  },
  // Remove the custom bitcoin miner transaction fee rate;  revert to the Bisq network's bitcoin miner transaction fee rate.
unsetTxFeeRatePreference: {
    path: '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.UnsetTxFeeRatePreferenceRequest,
    responseType: grpc_pb.UnsetTxFeeRatePreferenceReply,
    requestSerialize: serialize_io_bisq_protobuffer_UnsetTxFeeRatePreferenceRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_UnsetTxFeeRatePreferenceRequest,
    responseSerialize: serialize_io_bisq_protobuffer_UnsetTxFeeRatePreferenceReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_UnsetTxFeeRatePreferenceReply,
  },
  // Get a bitcoin transaction summary.
getTransaction: {
    path: '/io.bisq.protobuffer.Wallets/GetTransaction',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetTransactionRequest,
    responseType: grpc_pb.GetTransactionReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetTransactionRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetTransactionRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetTransactionReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetTransactionReply,
  },
  // Get all bitcoin receiving addresses in the Bisq BTC wallet.
getFundingAddresses: {
    path: '/io.bisq.protobuffer.Wallets/GetFundingAddresses',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetFundingAddressesRequest,
    responseType: grpc_pb.GetFundingAddressesReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetFundingAddressesRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetFundingAddressesRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetFundingAddressesReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetFundingAddressesReply,
  },
  // Set the Bisq wallet's encryption password.
setWalletPassword: {
    path: '/io.bisq.protobuffer.Wallets/SetWalletPassword',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.SetWalletPasswordRequest,
    responseType: grpc_pb.SetWalletPasswordReply,
    requestSerialize: serialize_io_bisq_protobuffer_SetWalletPasswordRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_SetWalletPasswordRequest,
    responseSerialize: serialize_io_bisq_protobuffer_SetWalletPasswordReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_SetWalletPasswordReply,
  },
  // Remove the encryption password from the Bisq wallet.
removeWalletPassword: {
    path: '/io.bisq.protobuffer.Wallets/RemoveWalletPassword',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.RemoveWalletPasswordRequest,
    responseType: grpc_pb.RemoveWalletPasswordReply,
    requestSerialize: serialize_io_bisq_protobuffer_RemoveWalletPasswordRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_RemoveWalletPasswordRequest,
    responseSerialize: serialize_io_bisq_protobuffer_RemoveWalletPasswordReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_RemoveWalletPasswordReply,
  },
  // Lock an encrypted Bisq wallet before the UnlockWallet rpc method's timeout period has expired.
lockWallet: {
    path: '/io.bisq.protobuffer.Wallets/LockWallet',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.LockWalletRequest,
    responseType: grpc_pb.LockWalletReply,
    requestSerialize: serialize_io_bisq_protobuffer_LockWalletRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_LockWalletRequest,
    responseSerialize: serialize_io_bisq_protobuffer_LockWalletReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_LockWalletReply,
  },
  // Unlock a Bisq encrypted wallet before calling wallet sensitive rpc methods: CreateOffer, TakeOffer, GetBalances,
// etc., for a timeout period in seconds.  An unlocked wallet will automatically lock itself after the timeout
// period has expired, or a LockWallet request has been made, whichever is first.  An unlocked wallet's timeout
// setting can be overridden by subsequent UnlockWallet calls.
unlockWallet: {
    path: '/io.bisq.protobuffer.Wallets/UnlockWallet',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.UnlockWalletRequest,
    responseType: grpc_pb.UnlockWalletReply,
    requestSerialize: serialize_io_bisq_protobuffer_UnlockWalletRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_UnlockWalletRequest,
    responseSerialize: serialize_io_bisq_protobuffer_UnlockWalletReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_UnlockWalletReply,
  },
};

exports.WalletsClient = grpc.makeGenericClientConstructor(WalletsService);
var GetVersionService = exports.GetVersionService = {
  // Get the current Bisq version number.
getVersion: {
    path: '/io.bisq.protobuffer.GetVersion/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.GetVersionRequest,
    responseType: grpc_pb.GetVersionReply,
    requestSerialize: serialize_io_bisq_protobuffer_GetVersionRequest,
    requestDeserialize: deserialize_io_bisq_protobuffer_GetVersionRequest,
    responseSerialize: serialize_io_bisq_protobuffer_GetVersionReply,
    responseDeserialize: deserialize_io_bisq_protobuffer_GetVersionReply,
  },
};

exports.GetVersionClient = grpc.makeGenericClientConstructor(GetVersionService);
