using SQLite;
using EPSTask.DataModel;

namespace EPSTask.DataAccess;

public class SQLiteDiscountCodeStorage : IDiscountCodeStorage, IDisposable
{
    private SQLiteAsyncConnection _connection;

    public SQLiteDiscountCodeStorage(string connectionString)
    {
        _connection = new SQLiteAsyncConnection(connectionString);
    }

    public async Task DeleteDiscountCodesAsync(IEnumerable<string> discountCodes)
    {
        try
        {
            await _connection.Table<DataModel.DiscountCodes>().DeleteAsync(x => discountCodes.Contains(x.Code));
        }
        catch (Exception ex)
        {
            throw new Exception("Error deleting discount codes", ex);
        }
        
    }

    public async Task<bool> ExistsAnyDiscountCodesAsync(IEnumerable<string> discountCode)
    {
        var exists = false;
        try{
            exists = await _connection.Table<DataModel.DiscountCodes>().Where(x => discountCode.Contains(x.Code)).CountAsync() > 0;
        }
        catch (Exception ex)
        {
            throw new Exception("Error checking for discount codes", ex);
        }
        return exists;
    }

    public async Task<IList<string>> GetDiscountCodesAsync(uint skip, uint take)
    {
        try
        {
            var codes = await _connection.Table<DataModel.DiscountCodes>().Skip((int)skip).Take((int)take).ToListAsync();
            return codes.Select(x => x.Code).ToList();
        }
        catch (Exception ex)
        {
            throw new Exception("Error getting discount codes", ex);
        }
    }

    public async Task SaveDiscountCodesAsync(IEnumerable<string> discountCodes)
    {
        try
        {
            var codes = discountCodes.Select(x => new DataModel.DiscountCodes { Code = x });
            await _connection.InsertAllAsync(codes);
        }
        catch (Exception ex)
        {
            throw new Exception("Error saving discount codes", ex);
        }
    }

    public async Task<uint> GetDiscountCodesCountAsync()
    {
        try
        {
            return (uint)await _connection.Table<DataModel.DiscountCodes>().CountAsync();
        }
        catch (Exception ex)
        {
            throw new Exception("Error getting discount codes count", ex);
        }
    }

    public async Task DeleteAllDiscountCodesAsync()
    {
        try
        {
            await _connection.DeleteAllAsync<DataModel.DiscountCodes>();
        }
        catch (Exception ex)
        {
            throw new Exception("Error deleting all discount codes", ex);
        }
    }

    public void Dispose()
    {
        _connection.CloseAsync();
    }
}