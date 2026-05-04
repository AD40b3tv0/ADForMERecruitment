using Backend.Domain.Entities;

namespace Backend.Infrastructure.Seed;
public static class DataSeeder
{
    public static IEnumerable<Product> GetInitialProducts()
    {
        return new[]
        {
            new Product { Code = "aLot005", Name = "RAM DDR5 6000MHz 2x64GB", Price = 29999.99m },
            new Product { Code = "aLot005rgb", Name = "RAM DDR5 6000MHz 2x64GB RGB", Price = 29999.99m },
            new Product { Code = "aLot006", Name = "RAM DDR5 6000MHz 2x128GB", Price = 59999.99m },
            new Product { Code = "B02", Name = "AMD 9950X3D", Price = 2899.99m },
            new Product { Code = "TV-001", Name = "Samsung 55\" QLED 4K", Price = 3499.00m },
            new Product { Code = "TV-002", Name = "LG 65\" OLED 4K", Price = 7999.00m },
            new Product { Code = "TV-003", Name = "Sony 43\" LED 4K", Price = 1999.00m },
            new Product { Code = "TV-004", Name = "Philips 50\" Ambilight 4K", Price = 2899.00m },
            new Product { Code = "TV-005", Name = "Hisense 75\" ULED 4K", Price = 4599.00m },
            new Product { Code = "AUD-001", Name = "Sony WH-1000XM5 Noise Cancelling", Price = 1299.00m },
            new Product { Code = "AUD-002", Name = "Bose QuietComfort Earbuds II", Price = 999.00m },
            new Product { Code = "AUD-003", Name = "JBL Flip 6 Portable Speaker", Price = 349.00m },
            new Product { Code = "AUD-004", Name = "Samsung HW-Q70C Soundbar", Price = 1999.00m },
            new Product { Code = "AUD-005", Name = "Marshall Stanmore II Bluetooth", Price = 1299.00m },
            new Product { Code = "CAM-001", Name = "Canon EOS R10 Mirrorless", Price = 4399.00m },
            new Product { Code = "CAM-002", Name = "Sony A7 IV Full Frame", Price = 12999.00m },
            new Product { Code = "CAM-003", Name = "GoPro HERO11 Black", Price = 2199.00m },
            new Product { Code = "CAM-004", Name = "Fujifilm X-T30 II", Price = 3799.00m },
            new Product { Code = "AP-K-001", Name = "Bosch Serie 6 Piekarnik elektryczny", Price = 2999.00m },
            new Product { Code = "AP-K-002", Name = "Samsung Lodówka No Frost 300L", Price = 3699.00m },
            new Product { Code = "AP-K-003", Name = "Whirlpool Zmywarka 60cm", Price = 1799.00m },
            new Product { Code = "AP-K-004", Name = "De'Longhi Ekspres do kawy", Price = 1299.00m },
            new Product { Code = "AP-K-005", Name = "Philips Sokowirówka", Price = 299.00m },
            new Product { Code = "AP-K-006", Name = "Mikrofala Samsung 25L", Price = 499.00m },
            new Product { Code = "AP-K-007", Name = "Tefal Czajnik elektryczny 1.7L", Price = 149.00m },
            new Product { Code = "PHN-006", Name = "Samsung Galaxy A54 128GB", Price = 1599.00m },
            new Product { Code = "PHN-007", Name = "Xiaomi Redmi Note 12 Pro", Price = 999.00m },
            new Product { Code = "STR-001", Name = "Apple TV 4K", Price = 799.00m },
            new Product { Code = "STR-002", Name = "Nvidia Shield TV Pro", Price = 899.00m },
            new Product { Code = "OFF-001", Name = "HP LaserJet Pro MFP", Price = 1299.00m },
            new Product { Code = "OFF-002", Name = "Epson EcoTank WiFi", Price = 999.00m },
        };
    }
}
