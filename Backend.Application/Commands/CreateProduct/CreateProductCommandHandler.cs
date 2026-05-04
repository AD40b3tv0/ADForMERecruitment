using Backend.Application.Interfaces;
using Backend.Domain.Entities;
using MediatR;
using Backend.Application.Dtos;

namespace Backend.Application.Commands.CreateProduct;

public class CreateProductCommandHandler(IProductRepository _productRepository) : IRequestHandler<CreateProductCommand, ProductDto>
{
    public async Task<ProductDto> Handle(CreateProductCommand request, CancellationToken cancellationToken)
    {
        Product product = new Product 
        { 
            Code = request.Code, 
            Name = request.Name, 
            Price = request.Price 
        };

        await _productRepository.AddAsync(product, cancellationToken);

        return new ProductDto(product.Id, product.Code, product.Name, product.Price); 
    }
}
