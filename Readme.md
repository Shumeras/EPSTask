# EPS Task

.Net 8 with gRPC.

## Local build

### Dependencies
<details>
    <summary>Server Dependencies</summary>

* `.Net SDK` v8.0.4
* Packages:
    * `Grpc.AspNetCore` v2.57.0
    * `Grpc.AspNetCore.Web` v2.62.0
    * `Microsoft.AspNetCore.SpaServices` v3.1.32
    * `Microsoft.AspNetCore.SpaServices.Extensions` v8.0.4
    * `sqlite-net-pcl` v1.9.172
* For tests:
    * `Microsoft.NET.Test.Sdk` v17.9.0
    * `Moq` v4.20.70
    * `xUnit` v2.8.0
    * `xunit.runner.visualstudio` v2.8.0
</details>
<details>
    <summary>Client Dependencies</summary>

* Client:
    * `Nodejs` v20.13.1 (LTS)
    * `npm` v10.7.0
    * Runtime depndencies:
      * `Angular` v17.3.7
      * `@improbable-eng/grpc-web` v0.15.0
      * `google-protobuf` v3.21.2
      * `rxjs` v7.8.0
      * `zone.js` v0.14.3
      * `tslib` v2.3.0
    * Development dependencies:
      * `Angular CLI` v17.3.7
      * `Typescript` v5.4.2
      * `ts-protoc-gen` v0.15.0
      * `Express` v4.18.2

</details>

### Running locally (no build)
1. Build client files 
```bash
cd <project_dir>/FrontEnd
npm install
npm run build
```
Whether dependencies are restored properly you can run `npm run start`, just the client side will launch on `http://localhost:4200` with live reloading

2. Build server
```bash
cd <project_dir>
dotnet restore
dotnet run
```
This will run the server localy in the terminal. Client application can be accessed on `http://localhost:5000` (client files served from `FrontEnd\dist\browser`), the client expects to reach gRPC services on `http://localhost:5165` (though, technically due to the http wrapper it can also reach them on port `:5000`).

On first database access `data/database.db` file will be created with the SQLite db file.

### Run locally (publish)
Run:
```bash
dotnet publish
```
This will trigger client and server restore/build automatically and build files will be placed in `bin\Release\net8.0` you can start the application by runing the generated executable file 
```
EPSTask[.exe]
```
or by running:
```bash
cd bin\Release\net8.0
dotnet EPSTask.dll
```
Client application can be accessed on `http://localhost:5000` (client files served from `wwwroot` in build folder), the client expects to reach gRPC services on `http://localhost:5165` (though, technically due to the http wrapper it can also reach them on port `:5000`).

On first database access `data/database.db` file will be created with the SQLite db file.

### Run Test(s)
They are only here as an example, but you can run them:
```bash
cd <project_dir>
dotnet restore
dotnet test
```

## Docker 
The docker container is built for Linux-x64 target, with dependencies on `apt-get` (so generaly a Debian based distro).


### Building
```bash
cd <project_dir>
docker build -t eps_task .
```

### Running the image
```docker
docker run -d -p 5000:5000 -p 5165:5165 --mount source=epsdata,target=/app/data [-e GRPC_ENDPOINT_URL="http://localhost:5165"] eps_task
```

The `GRPC_ENDPOINT_URL` env variable tells the client where to connect to reach the gRPC API, in case the container is hosted on a server with a custom domain.

The mount volume should be created automatically if it doesn't already exist.

`ASPNETCORE_URLS` can be used to change the URLs where the main application is served, but as there is only one endpoint and that is hidden behind your docker DNS, so no real point in editing it.