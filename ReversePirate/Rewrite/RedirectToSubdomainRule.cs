using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Rewrite;

namespace ReversePirate.Rewrite;

public class RedirectToDomainRule : IRule
{
    private readonly string domain;
    private readonly int _statusCode;

    public RedirectToDomainRule(string domain, int statusCode)
    {
        if (string.IsNullOrWhiteSpace(domain))
        {
            throw new ArgumentException($"{nameof(domain)} must be provided.");
        }

        this.domain = domain;
        _statusCode = statusCode;
    }

    public void ApplyRule(RewriteContext context)
    {
        var req = context.HttpContext.Request;

        if (req.Host.Host.Equals(domain, StringComparison.OrdinalIgnoreCase))
        {
            context.Result = RuleResult.ContinueRules;
            return;
        }

        var host = req.Host.Port.HasValue ? new HostString(domain, req.Host.Port.Value) : new HostString(domain);

        var request = context.HttpContext.Request;
        var response = context.HttpContext.Response;

        var newUrl = UriHelper.BuildAbsolute(
            request.Scheme,
            host,
            request.PathBase,
            request.Path,
            request.QueryString);

        response.StatusCode = _statusCode;
        response.Headers.Location = newUrl;
        context.Result = RuleResult.EndResponse;
    }
}
