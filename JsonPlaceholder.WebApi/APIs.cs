using JsonPlaceholder.WebApi.Responses;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace JsonPlaceholder.WebApi
{
    public static class APIs
    {
        private static readonly HttpClient httpClient = new HttpClient();
        private static string? JsonPlaceholderURL { get; set; }

        public static void ConfigureApi(this WebApplication app, IConfiguration configuration)
        {
            JsonPlaceholderURL = configuration["JsonPlaceholderURL"];

            // Configure All Endpoints Mappings
            app.MapGet("/users", GetUser);
            app.MapGet("/users/posts", GetPosts);
            app.MapGet("/users/todos", GetTodos);
        }

        private static async Task<IResult> GetUser([FromQuery] int id)
        {
            try
            {
                var response = await httpClient.GetAsync($"{JsonPlaceholderURL}/users/{id}");
                var responseResult = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<UserResponse>(
                    responseResult,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
                );

                return Results.Ok(result);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetTodos([FromQuery] int numberOfTodos)
        {
            try
            {
                var response = await httpClient.GetAsync($"{JsonPlaceholderURL}/todos");
                var responseResult = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<List<TodoResponse>>(
                    responseResult,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
                );

                result = result.Take(numberOfTodos).ToList();

                List<DataChartResponse> chartData = new();
                foreach (var item in result)
                {
                    var countLetters = Regex.Replace(item?.Title, @"[^a-zA-Z]", "").Length;

                    chartData.Add(new DataChartResponse
                    {
                        Name = $"Post {item.Id}",
                        Value = countLetters
                    });
                }

                return Results.Ok(chartData);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetPosts([FromQuery] int numberOfPosts)
        {
            try
            {
                var response = await httpClient.GetAsync($"{JsonPlaceholderURL}/posts");
                var responseResult = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<List<PostResponse>>(
                    responseResult,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
                );

                return Results.Ok(result.Take(numberOfPosts).ToList());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
    }
}
