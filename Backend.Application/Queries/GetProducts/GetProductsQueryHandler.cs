using Backend.Application.Dtos;
using Backend.Application.Interfaces;
using MediatR;

namespace Backend.Application.Queries.GetProducts;

public class GetProductsQueryHandler(IProductRepository _productRepository) 
    : IRequestHandler<GetProductsQuery, PagedResultDto<ProductDto>>
{
    public async Task<PagedResultDto<ProductDto>> Handle(GetProductsQuery request, CancellationToken cancellationToken)
    {
        var result = await _productRepository.GetAsync(request.Page, request.PageSize, request.Search, request.SortBy, request.SortDesc, cancellationToken);

        return new PagedResultDto<ProductDto>
        {
            Items = result.Items.Select(x => new ProductDto(x.Id, x.Code, x.Name, x.Price)),
            Total = result.Total,
            Page = result.Page,
            PageSize = result.PageSize
        };
    }
}
