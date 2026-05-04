using System.Net;
using System.Text.Json;
using FluentValidation;

namespace Backend.Api.Middleware;

public class ValidationExceptionMiddleware
{
    private readonly RequestDelegate _next;

    public ValidationExceptionMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (ValidationException ex)
        {
            context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            context.Response.ContentType = "application/problem+json";

            var errors = ex.Errors
                .GroupBy(e => e.PropertyName)
                .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray());

            var problem = new
            {
                title = "Validation failed",
                status = context.Response.StatusCode,
                detail = "One or more validation errors occurred.",
                errors
            };

            await context.Response.WriteAsync(JsonSerializer.Serialize(problem));
        }
    }
}