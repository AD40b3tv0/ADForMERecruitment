namespace Backend.Application.Dtos;

public class PagedResultDto<T>
{
    public IEnumerable<T> Items { get; init; } = Enumerable.Empty<T>();
    public int Total { get; init; }
    public int Page {  get; init; }
    public int PageSize { get; init; }
    public int TotalPages => (int) Math.Ceiling((double)Total / PageSize);
}
