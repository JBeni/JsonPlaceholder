using JsonPlaceholder.WebApi;

try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    var app = builder.Build();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.ConfigureApi(builder.Configuration);

    app.Run();
}
catch (Exception ex)
{
    Console.Error.WriteLine(ex);
}
