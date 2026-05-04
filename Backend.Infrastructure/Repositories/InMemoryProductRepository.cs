using Backend.Application.Dtos;
using Backend.Application.Enums;
using Backend.Application.Interfaces;
using Backend.Domain.Entities;
using Backend.Infrastructure.Contexts;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Repositories;

public class InMemoryProductRepository : IProductRepository
{
    private readonly InMemoryContext _context;

    public InMemoryProductRepository(InMemoryContext context) => _context = context;

    public async Task<PagedResultDto<Product>> GetAsync(int page, int pageSize, string? search, AllowedSortEnum? sortBy, bool sortDesc, CancellationToken ct)
    {
        IQueryable<Product> q = _context.Products.AsNoTracking();

        if (!string.IsNullOrWhiteSpace(search))
        {
            var s = $"%{search.Trim()}%";
            q = q.Where(x =>
                x.Code != null && EF.Functions.Like(x.Code, s) ||
                x.Name != null && EF.Functions.Like(x.Name, s)
            );
        }

        if (sortBy is not null)
        {
            q = sortBy switch
            {
                AllowedSortEnum.Id => sortDesc ? q.OrderByDescending(x => x.Id) : q.OrderBy(x => x.Id),
                AllowedSortEnum.Code => sortDesc ? q.OrderByDescending(x => x.Code) : q.OrderBy(x => x.Code),
                AllowedSortEnum.Name => sortDesc ? q.OrderByDescending(x => x.Name) : q.OrderBy(x => x.Name),
                AllowedSortEnum.Price => sortDesc ? q.OrderByDescending(x => x.Price) : q.OrderBy(x => x.Price),
                AllowedSortEnum.Default => q.OrderBy(x => x.Id),
                _ => q.OrderBy(x => x.Id)
            };
        }

        int total = await q.CountAsync(ct);
        var items = await q.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync(ct);
        return new PagedResultDto<Product> { Items = items, Total = total, Page = page, PageSize = pageSize };
    }

    public async Task<int> AddAsync(Product product, CancellationToken ct = default)
    {
        await _context.AddAsync(product, ct);
        return await _context.SaveChangesAsync(ct);
    }
}
