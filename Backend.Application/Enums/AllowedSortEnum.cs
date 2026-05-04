using Backend.Application.Attributes;

namespace Backend.Application.Enums;
public enum AllowedSortEnum
{
    [StringValue("default")]
    Default,
    [StringValue("id")] 
    Id,
    [StringValue("code")] 
    Code,
    [StringValue("name")] 
    Name,
    [StringValue("price")] 
    Price
}
