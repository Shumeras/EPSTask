using Grpc.Core;
using EPSTask.DataAccess;
using EPSTask.Utility;

namespace EPSTask.Services
{
    public class DiscountCodeService : DiscountCodes.DiscountCodesBase
    {
        private readonly IDiscountCodeStorage _storage;
        private readonly ICodeGenerator _codeGenerator;
        public DiscountCodeService(IDiscountCodeStorage storage, ICodeGenerator codeGenerator)
        {
            _storage = storage;
            _codeGenerator = codeGenerator;
        }

        public override async Task<CreateDiscountCodesResponse> CreateDiscountCodes(CreateDiscountCodesRequest request, ServerCallContext context)
        {
            if (request.Count < 1 || request.Count > 2000)
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Count must be between 1 and 2000"));
            
            if (request.Length != 7 && request.Length != 8)
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Length of generated codes can only be 7-8 characters long"));

            var discountCodes = _codeGenerator.GenerateCodes((byte)request.Length, request.Count);

            for(int i = 0; i < 3; i++) //up to 3 retries to reduce collisions
            {
                if (await _storage.ExistsAnyDiscountCodesAsync(discountCodes))
                    discountCodes = _codeGenerator.GenerateCodes((byte)request.Length, request.Count);
                else
                    break;
            }

            await _storage.SaveDiscountCodesAsync(discountCodes);

            return new CreateDiscountCodesResponse
            {
                Success = true
            };
        }

        public override async Task<GetDiscountCodesResponse> GetDiscountCodes(GetDiscountCodesRequest request, ServerCallContext context)
        {
            if (request.Take > 2000)
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Take can not must be between 1 and 2000"));

            var codes = await _storage.GetDiscountCodesAsync(request.Skip, request.Take);

            return new GetDiscountCodesResponse()
            {
                Count = (uint)codes.Count,
                Codes = { codes }
            };
        }

        public override async Task<UseDiscountCodeResponse> UseDiscountCode(UseDiscountCodeRequest request, ServerCallContext context)
        {
            if (request.Code.Length != 7 && request.Code.Length != 8)
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Provided code is invalid"));

            if (!await _storage.ExistsAnyDiscountCodesAsync(new List<string> { request.Code }))
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Provided code is invalid"));

            await _storage.DeleteDiscountCodesAsync(new List<string> { request.Code });

            return new UseDiscountCodeResponse{
                Result = 0x00                   
                // Task noted to return a byte as result code, but no indication of what the result code should be.
                // Just setting 0 as success code - seems reasonable. 200 also could be used. 🤷
            };
        }

        public override async Task<GetDiscountCodeCountResponse> GetDiscountCodeCount(Empty request, ServerCallContext context)
        {
            var count = await _storage.GetDiscountCodesCountAsync();

            return new GetDiscountCodeCountResponse
            {
                Count = (uint)count
            };
        }

        public override async Task<ClearDiscountCodesResponse> ClearDiscountCodes(Empty request, ServerCallContext context)
        {
            await _storage.DeleteAllDiscountCodesAsync();

            return new ClearDiscountCodesResponse
            {
                Success = true
            };
        }
    }
}