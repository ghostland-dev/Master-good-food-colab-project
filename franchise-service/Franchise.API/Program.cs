using Franchise.Data;
using Franchise.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Connexion à PostgreSQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<FranchiseDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddScoped<FranchiseService>();

// Configuration Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Franchise API", Version = "v1" });
});

builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Activer Swagger
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Franchise API v1");
    c.RoutePrefix = string.Empty;
});

app.UseAuthorization();
app.MapControllers();

try
{
    using var scope = app.Services.CreateScope();
    var dbContext = scope.ServiceProvider.GetRequiredService<FranchiseDbContext>();
    dbContext.Database.Migrate(); // Applique automatiquement les migrations
    Console.WriteLine("Migrations appliquées avec succès !");
}
catch (Exception ex)
{
    Console.WriteLine($"Erreur lors de l'application des migrations : {ex.Message}");
}

app.Run();
