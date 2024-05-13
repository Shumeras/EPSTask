using System.Security.Cryptography;

namespace EPSTask.Utility
{
    public class CodeGenerator : ICodeGenerator
    {
        public string GenerateCode(byte length)
        {
            return RandomNumberGenerator.GetHexString(length);
        }

        public IEnumerable<string> GenerateCodes(byte length, uint count)
        {
            var codes = new List<string>((int)count);
            for (int i = 0; i < count; i++)
            {
                codes.Add(GenerateCode(length));
            }

            return codes;
        }
    }
}