using Microsoft.AspNetCore.Rewrite;

namespace ReversePirate.Rewrite;

public static class RewriteOptionsExtension
{
    public static RewriteOptions AddRedirectToDomainPermanent(this RewriteOptions options, string domain)
    {
        return AddRedirectToDomain(options, domain, StatusCodes.Status308PermanentRedirect);
    }

    public static RewriteOptions AddRedirectToDomain(this RewriteOptions options, string domain, int statusCode)
    {
        options.Rules.Add(new RedirectToDomainRule(domain, statusCode));
        return options;
    }
}

