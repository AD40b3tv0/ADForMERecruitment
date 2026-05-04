using System.Reflection;
using Backend.Application.Attributes;

namespace Backend.Application.Extensions;

public static class EnumExtensions
{
    public static string GetStringValue(this Enum value)
    {
        var member = value.GetType().GetMember(value.ToString());
        if (member.Length == 0)
        {
            return value.ToString();
        }
        var attr = member[0].GetCustomAttribute<StringValueAttribute>();

        return attr?.Value ?? value.ToString();
    }
}