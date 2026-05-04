using MediatR;
using Microsoft.Extensions.Logging;
using System.Diagnostics;

namespace Backend.Application.Behaviors;

public class PerformanceBehavior<TRequest, TResponse>(ILogger<PerformanceBehavior<TRequest, TResponse>> logger) : IPipelineBehavior<TRequest, TResponse> 
    where TRequest : IRequest<TResponse>
{
    private readonly ILogger<PerformanceBehavior<TRequest, TResponse>> _logger = logger;

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        var stopwatch = Stopwatch.StartNew();
        var response = await next(cancellationToken);
        stopwatch.Stop();

        if (stopwatch.ElapsedMilliseconds > 0L)
        {
            _logger.LogInformation("Request {Request} executed in {ElapsedMilliseconds}ms", typeof(TRequest).Name, stopwatch.ElapsedMilliseconds);
        }
        else
        {
            _logger.LogInformation("Request {Request} executed in {ElapsedTicks} ticks (0ms)", typeof(TRequest).Name, stopwatch.ElapsedTicks);
        }

        return response;
    }
}