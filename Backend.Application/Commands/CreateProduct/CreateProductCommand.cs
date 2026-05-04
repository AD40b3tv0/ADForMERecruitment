using Backend.Application.Dtos;
using MediatR;

namespace Backend.Application.Commands.CreateProduct;

public record CreateProductCommand(string Code, string Name, decimal Price) : IRequest<ProductDto>;
