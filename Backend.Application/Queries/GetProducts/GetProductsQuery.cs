using Backend.Application.Dtos;
using Backend.Application.Enums;
using MediatR;

namespace Backend.Application.Queries.GetProducts;

public record GetProductsQuery(int Page, int PageSize, string? Search, AllowedSortEnum? SortBy, bool SortDesc) : IRequest<PagedResultDto<ProductDto>>;
