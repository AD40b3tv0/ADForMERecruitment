using System.ComponentModel.DataAnnotations;

namespace Backend.Domain.Entities;

public class Product
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Code { get; set; } = default!;
    public string Name { get; set; } = default!;
    public decimal Price { get; set; }
}
