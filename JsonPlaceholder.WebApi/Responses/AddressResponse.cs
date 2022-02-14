namespace JsonPlaceholder.WebApi.Models
{
    public class AddressResponse
    {
        public string? Street { get; set; }
        public string? Suite { get; set; }
        public string? City { get; set; }
        public string? Zipcode { get; set; }
        public GeoLocationResponse? Geo { get; set; }
    }
}
