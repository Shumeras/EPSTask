
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS Build
WORKDIR /source
COPY . .

# Installing node for building front-end
ENV NODE_VERSION=20.13.1
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version && npm --version

# Publish should run restore automaticaly
RUN dotnet publish  -c Release -o /app



FROM mcr.microsoft.com/dotnet/aspnet:8.0

ENV GRPC_ENDPOINT_URL="http://localhost:5165"

LABEL name="EPS" 
WORKDIR /app

COPY --from=Build /app ./

VOLUME "/app/data/"

EXPOSE 5000
EXPOSE 5165

RUN apt-get update && apt-get install -y curl
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 CMD curl --fail http://localhost:5000/health || exit 1

ENTRYPOINT ./EPSTask  