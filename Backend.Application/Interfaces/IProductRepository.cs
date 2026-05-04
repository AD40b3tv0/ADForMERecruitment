using Backend.Application.Dtos;
using Backend.Application.Enums;
using Backend.Domain.Entities;

namespace Backend.Application.Interfaces;

public interface IProductRepository
{
    Task<PagedResultDto<Product>> GetAsync(int page, int pageSize, string? search, AllowedSortEnum? sortBy, bool sortDesc, CancellationToken ct);
    Task<int> AddAsync(Product product, CancellationToken ct);
}
