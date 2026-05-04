using Backend.Api.Middleware;
using Backend.Application.Behaviors;
using Backend.Application.Interfaces;
using Backend.Application.Queries.GetProducts;
using Backend.Infrastructure.Contexts;
using Backend.Infrastructure.Repositories;
using FluentValidation;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<InMemoryContext>();

// Add services to the container.
builder.Services.AddScoped<IProductRepository, InMemoryProductRepository>();

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddMediatR(cfg => 
{ 
    cfg.RegisterServicesFromAssembly(typeof(Backend.Application.Commands.CreateProduct.CreateProductCommand).Assembly);

    cfg.AddOpenBehavior(typeof(ValidationBehavior<,>));
    cfg.AddOpenBehavior(typeof(PerformanceBehavior<,>));
});

builder.Services.AddTransient<IValidator<GetProductsQuery>, GetProductsQueryValidator>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

// Initial data seeding.
using (var context = new InMemoryContext())
{
    context.Database.EnsureCreated();
}

app.UseMiddleware<ValidationExceptionMiddleware>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/openapi/v1.json", "v1");
        options.RoutePrefix = "swagger";   // UI at [URL]/swagger
    });
}

// app.UseHttpsRedirection();

app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();
