using FluentValidation;

namespace Backend.Application.Queries.GetProducts;

public class GetProductsQueryValidator : AbstractValidator<GetProductsQuery>
{
    private const int MaxPageSize = 50;
    private static readonly string[] AllowedSorts = { "id", "code", "name", "price" };

    public GetProductsQueryValidator()
    {
        RuleFor(x => x.Page)
            .GreaterThanOrEqualTo(1)
            .WithMessage("Page must be 1 or higher.");

        RuleFor(x => x.PageSize)
            .InclusiveBetween(1, MaxPageSize)
            .WithMessage($"PageSize must be between 1 and {MaxPageSize}");

        When(x => x.Search is not null, () =>
        {
            RuleFor(x => x.Search)
                .MaximumLength(200)
                .WithMessage("Search must be at most 200 characters.");
        });

        When(x => x.SortBy is not null, () =>
        {
            RuleFor(x => x.SortBy!)
                .IsInEnum()
                .WithMessage($"SortBy must be one of: {string.Join(", ", AllowedSorts)} (case-insensitive).");
        });
    }
}
