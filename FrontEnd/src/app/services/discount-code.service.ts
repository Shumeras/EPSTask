import { Injectable } from '@angular/core';
import { Request } from "@improbable-eng/grpc-web/dist/typings/invoke";
import { DiscountCodes, DiscountCodesClient } from '../../generated/DiscountCodes_pb_service';
import '../../generated/DiscountCodes_pb';
import { 
  ClearDiscountCodesResponse,
  CreateDiscountCodesRequest, 
  CreateDiscountCodesResponse,
  Empty,
  GetDiscountCodeCountResponse,
  GetDiscountCodesRequest,
  GetDiscountCodesResponse, 
  UseDiscountCodeRequest, 
  UseDiscountCodeResponse
} from '../../generated/DiscountCodes_pb';
import { grpc } from '@improbable-eng/grpc-web';

@Injectable({
  providedIn: 'root'
})
export class DiscountCodeService {
  
  private grpcEndpoint = `${window.location.protocol}//${window.location.hostname}:5165`;

  constructor() {
    fetch(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/grpc_endpoint_url`)
      .then(response => response.text())
      .then(text => this.grpcEndpoint = text);
  }

  createDiscountCodes(length: number, count: number): Promise<CreateDiscountCodesResponse> {
    const request = new CreateDiscountCodesRequest();
    request.setLength(length);
    request.setCount(count);
    
    return new Promise((resolve, reject) => {
      grpc.unary(
        DiscountCodes.CreateDiscountCodes,
        {
          request: request,
          host: this.grpcEndpoint,
          onEnd: 
            (output) => {
              output.status === grpc.Code.OK 
                ? resolve(output.message as CreateDiscountCodesResponse) 
                : reject({status: output.status, message: output.statusMessage});
            }
        }
      )
    });
  }

  getDiscountCodes(skip: number, take: number): Promise<GetDiscountCodesResponse> {
    const request = new GetDiscountCodesRequest();
    request.setSkip(skip);
    request.setTake(take);
    
    return new Promise((resolve, reject) => {
      grpc.unary(
        DiscountCodes.GetDiscountCodes,
        {
          request: request,
          host: this.grpcEndpoint,
          onEnd: 
            (output) => {
              output.status === grpc.Code.OK 
                ? resolve(output.message as GetDiscountCodesResponse) 
                : reject({status: output.status, message: output.statusMessage});
            }
        }
      )
    });
  }

  getDiscountCodesCount(): Promise<GetDiscountCodeCountResponse> {
    const request = new Empty();

    return new Promise((resolve, reject) => {
      grpc.unary(
        DiscountCodes.GetDiscountCodeCount,
        {
          request: request,
          host: this.grpcEndpoint,
          onEnd: 
            (output) => {
              output.status === grpc.Code.OK 
                ? resolve(output.message as GetDiscountCodeCountResponse) 
                : reject({status: output.status, message: output.statusMessage});
            }
        }
      )
    });
  }

  useDiscountCode(code: string): Promise<UseDiscountCodeResponse> {
    const request = new UseDiscountCodeRequest();
    request.setCode(code);

    return new Promise((resolve, reject) => {
      grpc.unary(
        DiscountCodes.UseDiscountCode,
        {
          request: request,
          host: this.grpcEndpoint,
          onEnd: 
            (output) => {
              output.status === grpc.Code.OK 
                ? resolve(output.message as UseDiscountCodeResponse) 
                : reject({status: output.status, message: output.statusMessage});
            }
        }
      )
    });
  }

  clearDiscountCodes(): Promise<ClearDiscountCodesResponse> {
    const request = new Empty();

    return new Promise((resolve, reject) => {
      grpc.unary(
        DiscountCodes.ClearDiscountCodes,
        {
          request: request,
          host: this.grpcEndpoint,
          onEnd: 
            (output) => {
              output.status === grpc.Code.OK 
                ? resolve(output.message as ClearDiscountCodesResponse) 
                : reject({status: output.status, message: output.statusMessage});
            }
        }
      )
    });
  }
}
