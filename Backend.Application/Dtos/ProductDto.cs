namespace Backend.Application.Dtos;

public record ProductDto(Guid Id, string Code, string Name, decimal Price);
