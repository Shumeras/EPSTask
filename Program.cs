using EPSTask.DataAccess;
using EPSTask.Services;
using EPSTask.Utility;
using Microsoft.Extensions.FileProviders;
using SQLite;

// Ensuring db location
#region Service Setup
var builder = WebApplication.CreateBuilder(args);

var dbFile = builder.Configuration["DBFile"] ?? "data/database.db";
var staticFileRoot = "wwwroot";
var grpcEndpointUrl = Environment.GetEnvironmentVariable("GRPC_ENDPOINT_URL") ?? "http://localhost:5165";

if (builder.Environment.IsDevelopment())
{
    staticFileRoot = "FrontEnd/dist/browser";
}

builder.Services.AddGrpc();
builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = staticFileRoot);
builder.Services.AddCors(
    options => {
        options.AddDefaultPolicy(
            builder =>
            {
                // Wouldn't leave this as is for production, 
                // at least restricting origins should be done for web clients
                builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
    }
);

builder.Services.AddSingleton<IDiscountCodeStorage, SQLiteDiscountCodeStorage>(
    provider => {
        // Ensuring DB file and table exists
        if (!Path.Exists(Path.GetDirectoryName(dbFile) ?? ""))
            Directory.CreateDirectory(Path.GetDirectoryName(dbFile) ?? "");

        var db = new SQLiteConnection(dbFile, SQLiteOpenFlags.Create | SQLiteOpenFlags.ReadWrite);
        db.CreateTable<EPSTask.DataModel.DiscountCodes>();
        db.Close();
        db.Dispose();
        return new SQLiteDiscountCodeStorage(dbFile);
    }
);
builder.Services.AddSingleton<ICodeGenerator, CodeGenerator>();
builder.Services.AddHealthChecks();

#endregion Service Setup

#region HTTP request pipeline.

var app = builder.Build();

// Adding a way for front end to get the grpc endpoint url for forther requests
// So this can be configured when launching the docker container
app.MapGet("/grpc_endpoint_url", () => grpcEndpointUrl);

app.UseCors();

// Front end static files
app.UseSpaStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), staticFileRoot)),
});

app.UseSpa(
    configuration => {
        configuration.Options.DefaultPage = "/index.html";
    }
);


app.UseGrpcWeb(new GrpcWebOptions { DefaultEnabled = true });
app.MapGrpcService<DiscountCodeService>().EnableGrpcWeb();
app.MapHealthChecks("/health");

app.Run();

#endregion HTTP request pipeline.
