using JsonPlaceholder.WebApi.Models;
using System.Text.Json;

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
            app.MapGet("/users/{id}", GetUser);
            app.MapGet("/posts/{numberOfPosts}", GetPosts);
            app.MapGet("/todos/{numberOfTodos}", GetTodos);
        }

        private static async Task<IResult> GetUser(int id)
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

        private static async Task<IResult> GetTodos(int numberOfTodos)
        {
            try
            {
                var response = await httpClient.GetAsync($"{JsonPlaceholderURL}/todos");
                var responseResult = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<List<TodoResponse>>(
                    responseResult,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
                );

                return Results.Ok(result.Take(numberOfTodos).ToList());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetPosts(int numberOfPosts)
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
