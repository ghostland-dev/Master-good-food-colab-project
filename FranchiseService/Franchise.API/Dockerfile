# Étape 1 : Build de l'application avec .NET 8
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Monter d'un niveau pour récupérer les autres projets
COPY ./*.csproj ./Franchise.API/
COPY ./../Franchise.Data/*.csproj ./Franchise.Data/
COPY ./../Franchise.Domain/*.csproj ./Franchise.Domain/
COPY ./../Franchise.Services/*.csproj ./Franchise.Services/

# Restaurer les dépendances
RUN dotnet restore ./Franchise.API/Franchise.API.csproj

# Copier tout le reste des fichiers et compiler
COPY ../ .
WORKDIR /app/Franchise.API
RUN dotnet publish -c Release -o /app/out

# Étape 2 : Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Copier les fichiers publiés
COPY --from=build /app/out .

# Lancer l'application
CMD ["dotnet", "Franchise.API.dll"]
