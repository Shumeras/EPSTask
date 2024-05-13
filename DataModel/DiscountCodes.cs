using SQLite;

namespace EPSTask.DataModel;

public class DiscountCodes
{
    [PrimaryKey]
    public string Code { get; set; }
}