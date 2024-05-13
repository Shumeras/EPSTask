// package: DiscountCodes
// file: DiscountCodes.proto

import { CreateDiscountCodesRequest, CreateDiscountCodesResponse, UseDiscountCodeRequest, UseDiscountCodeResponse, GetDiscountCodesRequest, GetDiscountCodesResponse, Empty, GetDiscountCodeCountResponse, ClearDiscountCodesResponse } from "./DiscountCodes_pb";
import { grpc } from "@improbable-eng/grpc-web";

var DiscountCodes = (function () {
  function DiscountCodes() {}
  DiscountCodes.serviceName = "DiscountCodes.DiscountCodes";
  return DiscountCodes;
}());

DiscountCodes.CreateDiscountCodes = {
  methodName: "CreateDiscountCodes",
  service: DiscountCodes,
  requestStream: false,
  responseStream: false,
  requestType: CreateDiscountCodesRequest,
  responseType: CreateDiscountCodesResponse
};

DiscountCodes.UseDiscountCode = {
  methodName: "UseDiscountCode",
  service: DiscountCodes,
  requestStream: false,
  responseStream: false,
  requestType: UseDiscountCodeRequest,
  responseType: UseDiscountCodeResponse
};

DiscountCodes.GetDiscountCodes = {
  methodName: "GetDiscountCodes",
  service: DiscountCodes,
  requestStream: false,
  responseStream: false,
  requestType: GetDiscountCodesRequest,
  responseType: GetDiscountCodesResponse
};

DiscountCodes.GetDiscountCodeCount = {
  methodName: "GetDiscountCodeCount",
  service: DiscountCodes,
  requestStream: false,
  responseStream: false,
  requestType: Empty,
  responseType: GetDiscountCodeCountResponse
};

DiscountCodes.ClearDiscountCodes = {
  methodName: "ClearDiscountCodes",
  service: DiscountCodes,
  requestStream: false,
  responseStream: false,
  requestType: Empty,
  responseType: ClearDiscountCodesResponse
};

const _DiscountCodes = DiscountCodes;
export { _DiscountCodes as DiscountCodes };

function DiscountCodesClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DiscountCodesClient.prototype.createDiscountCodes = function createDiscountCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DiscountCodes.CreateDiscountCodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DiscountCodesClient.prototype.useDiscountCode = function useDiscountCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DiscountCodes.UseDiscountCode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DiscountCodesClient.prototype.getDiscountCodes = function getDiscountCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DiscountCodes.GetDiscountCodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DiscountCodesClient.prototype.getDiscountCodeCount = function getDiscountCodeCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DiscountCodes.GetDiscountCodeCount, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DiscountCodesClient.prototype.clearDiscountCodes = function clearDiscountCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DiscountCodes.ClearDiscountCodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

const _DiscountCodesClient = DiscountCodesClient;
export { _DiscountCodesClient as DiscountCodesClient };

