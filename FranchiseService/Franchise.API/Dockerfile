# �tape 1 : Build de l'application avec .NET 8
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copier seulement les fichiers de projet pour optimiser la mise en cache
COPY FranchiseService/Franchise.API/*.csproj ./FranchiseService/Franchise.API/
COPY FranchiseService/Franchise.Data/*.csproj ./FranchiseService/Franchise.Data/
COPY FranchiseService/Franchise.Domain/*.csproj ./FranchiseService/Franchise.Domain/
COPY FranchiseService/Franchise.Services/*.csproj ./FranchiseService/Franchise.Services/

# Restaurer les d�pendances
RUN dotnet restore ./FranchiseService/Franchise.API/Franchise.API.csproj

# Copier le reste des fichiers et publier
COPY . . 
WORKDIR /app/FranchiseService/Franchise.API
RUN dotnet publish -c Release -o /app/out

# �tape 2 : Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Copier les fichiers de publication
COPY --from=build /app/out .

# Ex�cuter les migrations avant de lancer l'API
CMD ["sh", "-c", "dotnet Franchise.API.dll"]

