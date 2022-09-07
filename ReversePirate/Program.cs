using Microsoft.AspNetCore.Rewrite;
using ReversePirate.Rewrite;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddReverseProxy()
	.LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Error");
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.MapReverseProxy();

if (!app.Environment.IsDevelopment())
{
	var rewriteOptions = new RewriteOptions()
		.AddRedirectToDomainPermanent("arrr.umbraco.community");

    app.UseRewriter(rewriteOptions);
}

app.UseHttpsRedirection();

app.UseRewriter();

app.UseStaticFiles();

app.UseAuthorization();

app.UseRouting();

app.MapRazorPages();

app.Run();
