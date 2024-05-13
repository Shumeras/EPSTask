// package: DiscountCodes
// file: DiscountCodes.proto

import * as jspb from "google-protobuf";

export class CreateDiscountCodesRequest extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDiscountCodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDiscountCodesRequest): CreateDiscountCodesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDiscountCodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDiscountCodesRequest;
  static deserializeBinaryFromReader(message: CreateDiscountCodesRequest, reader: jspb.BinaryReader): CreateDiscountCodesRequest;
}

export namespace CreateDiscountCodesRequest {
  export type AsObject = {
    count: number,
    length: number,
  }
}

export class CreateDiscountCodesResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDiscountCodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDiscountCodesResponse): CreateDiscountCodesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDiscountCodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDiscountCodesResponse;
  static deserializeBinaryFromReader(message: CreateDiscountCodesResponse, reader: jspb.BinaryReader): CreateDiscountCodesResponse;
}

export namespace CreateDiscountCodesResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class UseDiscountCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UseDiscountCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UseDiscountCodeRequest): UseDiscountCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UseDiscountCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UseDiscountCodeRequest;
  static deserializeBinaryFromReader(message: UseDiscountCodeRequest, reader: jspb.BinaryReader): UseDiscountCodeRequest;
}

export namespace UseDiscountCodeRequest {
  export type AsObject = {
    code: string,
  }
}

export class UseDiscountCodeResponse extends jspb.Message {
  getResult(): number;
  setResult(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UseDiscountCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UseDiscountCodeResponse): UseDiscountCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UseDiscountCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UseDiscountCodeResponse;
  static deserializeBinaryFromReader(message: UseDiscountCodeResponse, reader: jspb.BinaryReader): UseDiscountCodeResponse;
}

export namespace UseDiscountCodeResponse {
  export type AsObject = {
    result: number,
  }
}

export class GetDiscountCodesRequest extends jspb.Message {
  getSkip(): number;
  setSkip(value: number): void;

  getTake(): number;
  setTake(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDiscountCodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDiscountCodesRequest): GetDiscountCodesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDiscountCodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDiscountCodesRequest;
  static deserializeBinaryFromReader(message: GetDiscountCodesRequest, reader: jspb.BinaryReader): GetDiscountCodesRequest;
}

export namespace GetDiscountCodesRequest {
  export type AsObject = {
    skip: number,
    take: number,
  }
}

export class GetDiscountCodesResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  clearCodesList(): void;
  getCodesList(): Array<string>;
  setCodesList(value: Array<string>): void;
  addCodes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDiscountCodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDiscountCodesResponse): GetDiscountCodesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDiscountCodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDiscountCodesResponse;
  static deserializeBinaryFromReader(message: GetDiscountCodesResponse, reader: jspb.BinaryReader): GetDiscountCodesResponse;
}

export namespace GetDiscountCodesResponse {
  export type AsObject = {
    count: number,
    codesList: Array<string>,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class GetDiscountCodeCountResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDiscountCodeCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDiscountCodeCountResponse): GetDiscountCodeCountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDiscountCodeCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDiscountCodeCountResponse;
  static deserializeBinaryFromReader(message: GetDiscountCodeCountResponse, reader: jspb.BinaryReader): GetDiscountCodeCountResponse;
}

export namespace GetDiscountCodeCountResponse {
  export type AsObject = {
    count: number,
  }
}

export class ClearDiscountCodesResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearDiscountCodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClearDiscountCodesResponse): ClearDiscountCodesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearDiscountCodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearDiscountCodesResponse;
  static deserializeBinaryFromReader(message: ClearDiscountCodesResponse, reader: jspb.BinaryReader): ClearDiscountCodesResponse;
}

export namespace ClearDiscountCodesResponse {
  export type AsObject = {
    success: boolean,
  }
}

