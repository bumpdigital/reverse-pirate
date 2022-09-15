# Reverse Pirate

An act o' piracy brought to you by thar fearsome crew of [Bump Digital](https://bump.digital/)

## Ahoy Umbraco Community...

In honour of International Talk Like a Pirate Day, thar crew o' Bump Digital pondered if '[Our](https://our.umbraco.com)' could be provided wit' a portion more piratical parlance. T' that end, we present this proof-o'-concept app which be now live at [arrr.umbraco.community](arrr.umbraco.community).

## How it works

### ReversePirate.csproj
ReversePirate.csproj is a basic ASP.NET site containing [YARP](https://microsoft.github.io/reverse-proxy/), which provides an efficient reverse proxy to our.umbraco.com.

### boatswain
boatswain is a [Cloudflare Worker](https://developers.cloudflare.com/workers/) project, built with Wrangler, that sits in front of arrr.umbraco.com and allows us to modify requests and responses streams 

## Contributing

We'd love it if the community contributed to this project to make this even more piratey, or if you'd just like to change your pirate name.

### Add/Change Translations

Our terminology, package names, and community member names live in [src/boatswain/src/translation/our-pirate-phrases.ts](src/boatswain/src/translation/our-pirate-phrases.ts).

Single word translations live over in [src/boatswain/src/translation/pirate-words.ts](src/boatswain/src/translation/pirate-words.ts).

### Make it prettier
Unfortunately, there's no way to run wrangler in development without having access to our Cloudflare workers instance so you'll need to preview changes in your browser against the live site.

If you want to make it prettier, take a look at modifying [src/boatswain/src/scss/](src/boatswain/src/scss/). It seems the CSS compiled by CDF is sometimes more specific than what the sass build will produce. You may need to resort to adding new rules or an `!important` here or there.

To add new images (or other supported static files), pop your files into [src/boatswain/src/public/](src/boatswain/src/public/) and they will served instead of files from the site.
