namespace EPSTask.DataAccess;

public interface IDiscountCodeStorage
{
    public Task SaveDiscountCodesAsync(IEnumerable<string> discountCodes);
    
    public Task DeleteDiscountCodesAsync(IEnumerable<string> discountCodes);
    
    public Task<bool> ExistsAnyDiscountCodesAsync(IEnumerable<string> discountCode);

    public Task<IList<string>> GetDiscountCodesAsync(UInt32 skip, UInt32 take);

    public Task<UInt32> GetDiscountCodesCountAsync();

    public Task DeleteAllDiscountCodesAsync();

}