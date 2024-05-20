using System.Security.Cryptography;

namespace EPSTask.Utility
{
    public class CodeGenerator : ICodeGenerator
    {
        private static readonly char[] _charChoices = 
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray(); 
            

        public string GenerateCode(byte length)
        {
            return RandomNumberGenerator.GetString(_charChoices,length);
        }

        public IEnumerable<string> GenerateCodes(byte length, uint count)
        {
            var codes = new HashSet<string>((int)count);
            for (int i = 0; i < count; i++)
            {
                if (!codes.Add(GenerateCode(length)))
                {
                    // In case of collision - retry.
                    i--;
                }   
            }

            return codes;
        }
    }
}