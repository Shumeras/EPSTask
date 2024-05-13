// package: DiscountCodes
// file: DiscountCodes.proto

import * as DiscountCodes_pb from "./DiscountCodes_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DiscountCodesCreateDiscountCodes = {
  readonly methodName: string;
  readonly service: typeof DiscountCodes;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DiscountCodes_pb.CreateDiscountCodesRequest;
  readonly responseType: typeof DiscountCodes_pb.CreateDiscountCodesResponse;
};

type DiscountCodesUseDiscountCode = {
  readonly methodName: string;
  readonly service: typeof DiscountCodes;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DiscountCodes_pb.UseDiscountCodeRequest;
  readonly responseType: typeof DiscountCodes_pb.UseDiscountCodeResponse;
};

type DiscountCodesGetDiscountCodes = {
  readonly methodName: string;
  readonly service: typeof DiscountCodes;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DiscountCodes_pb.GetDiscountCodesRequest;
  readonly responseType: typeof DiscountCodes_pb.GetDiscountCodesResponse;
};

type DiscountCodesGetDiscountCodeCount = {
  readonly methodName: string;
  readonly service: typeof DiscountCodes;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DiscountCodes_pb.Empty;
  readonly responseType: typeof DiscountCodes_pb.GetDiscountCodeCountResponse;
};

type DiscountCodesClearDiscountCodes = {
  readonly methodName: string;
  readonly service: typeof DiscountCodes;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof DiscountCodes_pb.Empty;
  readonly responseType: typeof DiscountCodes_pb.ClearDiscountCodesResponse;
};

export class DiscountCodes {
  static readonly serviceName: string;
  static readonly CreateDiscountCodes: DiscountCodesCreateDiscountCodes;
  static readonly UseDiscountCode: DiscountCodesUseDiscountCode;
  static readonly GetDiscountCodes: DiscountCodesGetDiscountCodes;
  static readonly GetDiscountCodeCount: DiscountCodesGetDiscountCodeCount;
  static readonly ClearDiscountCodes: DiscountCodesClearDiscountCodes;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DiscountCodesClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createDiscountCodes(
    requestMessage: DiscountCodes_pb.CreateDiscountCodesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.CreateDiscountCodesResponse|null) => void
  ): UnaryResponse;
  createDiscountCodes(
    requestMessage: DiscountCodes_pb.CreateDiscountCodesRequest,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.CreateDiscountCodesResponse|null) => void
  ): UnaryResponse;
  useDiscountCode(
    requestMessage: DiscountCodes_pb.UseDiscountCodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.UseDiscountCodeResponse|null) => void
  ): UnaryResponse;
  useDiscountCode(
    requestMessage: DiscountCodes_pb.UseDiscountCodeRequest,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.UseDiscountCodeResponse|null) => void
  ): UnaryResponse;
  getDiscountCodes(
    requestMessage: DiscountCodes_pb.GetDiscountCodesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.GetDiscountCodesResponse|null) => void
  ): UnaryResponse;
  getDiscountCodes(
    requestMessage: DiscountCodes_pb.GetDiscountCodesRequest,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.GetDiscountCodesResponse|null) => void
  ): UnaryResponse;
  getDiscountCodeCount(
    requestMessage: DiscountCodes_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.GetDiscountCodeCountResponse|null) => void
  ): UnaryResponse;
  getDiscountCodeCount(
    requestMessage: DiscountCodes_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.GetDiscountCodeCountResponse|null) => void
  ): UnaryResponse;
  clearDiscountCodes(
    requestMessage: DiscountCodes_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.ClearDiscountCodesResponse|null) => void
  ): UnaryResponse;
  clearDiscountCodes(
    requestMessage: DiscountCodes_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: DiscountCodes_pb.ClearDiscountCodesResponse|null) => void
  ): UnaryResponse;
}

