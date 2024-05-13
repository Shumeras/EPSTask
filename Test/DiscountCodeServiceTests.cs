using Xunit;
using Moq;
using Grpc.Core;
using EPSTask.Services;
using EPSTask.DataAccess;
using EPSTask.Utility;
using EPSTask;

namespace EPSTask.Test;

// Adding Unit test for UseDiscountCode method, as an example.
// They really should be seperated out into a different project file,
// but leaving them here for simplicity

public class DiscountCodeServiceTests
{

    // Success Result
    [Fact]
    public async Task UseDiscountCode_WithValidCode_ReturnsSuccess()
    {
        // Arrange
        var mockCodeGenerator = new Mock<ICodeGenerator>();
        
        var mockStorage = new Mock<IDiscountCodeStorage>();
        mockStorage.Setup(s => s.ExistsAnyDiscountCodesAsync(It.IsAny<List<string>>())).ReturnsAsync(true);
        mockStorage.Setup(s => s.DeleteDiscountCodesAsync(It.IsAny<List<string>>())).Returns(Task.CompletedTask);
        
        var service = new DiscountCodeService(mockStorage.Object, mockCodeGenerator.Object);
        var request = new UseDiscountCodeRequest { Code = "1234567" };

        // Act
        var response = await service.UseDiscountCode(request, null);

        // Assert
        Assert.Equal((uint)0x00, response.Result);
    }

    [Fact]
    public async Task UseDiscountCode_WithInvalidCode_ThrowsRpcException()
    {
        // Arrange
        var mockCodeGenerator = new Mock<ICodeGenerator>();
        
        var mockStorage = new Mock<IDiscountCodeStorage>();
        mockStorage.Setup(s => s.ExistsAnyDiscountCodesAsync(It.IsAny<List<string>>())).ReturnsAsync(false);

        var service = new DiscountCodeService(mockStorage.Object, mockCodeGenerator.Object);
        var request = new UseDiscountCodeRequest { Code = "invalid" };

        // Act & Assert
        await Assert.ThrowsAsync<RpcException>(() => service.UseDiscountCode(request, null));
    }
}