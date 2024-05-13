namespace EPSTask.Utility;

public interface ICodeGenerator
{
    public string GenerateCode(byte length);
    public IEnumerable<string> GenerateCodes(byte length, UInt32 count);
}