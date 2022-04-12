#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["DiaryService/DiaryService.API/DiaryService.API.csproj", "DiaryService/DiaryService.API/"]
COPY ["DiaryService/DiaryService.BL/DiaryService.BL.csproj", "DiaryService/DiaryService.BL/"]
COPY ["DiaryService/DiaryService.DAL/DiaryService.DAL.csproj", "DiaryService/DiaryService.DAL/"]
COPY ["DiaryService/DiaryService.Models/DiaryService.Models.csproj", "DiaryService/DiaryService.Models/"]
RUN dotnet restore "DiaryService/DiaryService.API/DiaryService.API.csproj"
COPY . .
WORKDIR "/src/DiaryService/DiaryService.API"
RUN dotnet build "DiaryService.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DiaryService.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DiaryService.API.dll"]