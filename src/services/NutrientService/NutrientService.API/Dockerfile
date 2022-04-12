#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["NutrientService/NutrientService.API/nuget.config", "NutrientService/NutrientService.API/"]
COPY ["NutrientService/NutrientService.API/NutrientService.API.csproj", "NutrientService/NutrientService.API/"]
COPY ["NutrientService/NutrientService.Models/NutrientService.Models.csproj", "NutrientService/NutrientService.Models/"]
COPY ["NutrientService/NutrientService.BL/NutrientService.BL.csproj", "NutrientService/NutrientService.BL/"]
COPY ["NutrientService/NutrientService.DAL/NutrientService.DAL.csproj", "NutrientService/NutrientService.DAL/"]
RUN dotnet restore "NutrientService/NutrientService.API/NutrientService.API.csproj"
COPY . .
WORKDIR "/src/NutrientService/NutrientService.API"
RUN dotnet build "NutrientService.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "NutrientService.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "NutrientService.API.dll"]