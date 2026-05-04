namespace Backend.Application.Attributes;

[AttributeUsage(AttributeTargets.Field, AllowMultiple = false)]
public sealed class StringValueAttribute : Attribute
{
    public string Value { get; private set; }
    public StringValueAttribute(string value) => Value = value;
}