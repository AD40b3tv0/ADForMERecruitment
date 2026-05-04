using Backend.Domain.Entities;
using Backend.Infrastructure.Seed;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Contexts;

public class InMemoryContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("ProductsDatabase");
        optionsBuilder.UseSeeding((context, _) =>
        {
            int count = context.Set<Product>().Count();
            if (count == 0)
            {
                context.Set<Product>().AddRange(DataSeeder.GetInitialProducts());
                context.SaveChanges();
            }
        });
        optionsBuilder.UseAsyncSeeding(async (context, _, cancellationToken) =>
        {
            int count = await context.Set<Product>().CountAsync(cancellationToken);
            if (count == 0)
            {
                context.Set<Product>().AddRange(DataSeeder.GetInitialProducts());
                await context.SaveChangesAsync();
            }
        });
    }
}
