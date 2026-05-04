using Backend.Application.Commands.CreateProduct;
using Backend.Application.Dtos;
using Backend.Application.Queries.GetProducts;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : Controller
{
    private readonly IMediator _mediator;

    public ProductsController(IMediator mediator) => _mediator = mediator;

    [HttpGet]
    public async Task<ActionResult<PagedResultDto<ProductDto>>> Get([FromQuery] GetProductsQuery query, CancellationToken cancellationToken)
    {
        var pagedResult = await _mediator.Send(query, cancellationToken);
        return Ok(pagedResult);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateProductCommand command, CancellationToken cancellationToken)
    {
        var product = await _mediator.Send(command, cancellationToken);
        return Ok(product);
    }
}
