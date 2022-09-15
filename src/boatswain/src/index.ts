import { getAssetFromKV } from "@cloudflare/kv-asset-handler"
import manifestJSON from '__STATIC_CONTENT_MANIFEST'
import { ContentReplacementHandler } from "./rewriter";

const assetManifest = JSON.parse(manifestJSON)

const staticFiles = ['css', 'png', 'jpg', 'svg', 'map'];

export const isStatic = (request: Request) => staticFiles.some(f => request.url.endsWith('.' + f));

async function handleStaticRequest(request: Request, env: { __STATIC_CONTENT: String; }, ctx: ExecutionContext) {
	// Do or do not. There is no try. 
	// We can't easily check if an item exists, we just need to try and get it.
	try {
		return await getAssetFromKV({
			request,
			waitUntil(promise) {
				return ctx.waitUntil(promise)
			},
		}, {
			ASSET_NAMESPACE: env.__STATIC_CONTENT,
			ASSET_MANIFEST: assetManifest,
		},);
	} catch {
		// fetch directly from the site instead
		return await fetch(request);
	}
}

async function handleHtmlRequest(request: Request): Promise<Response> {
	const res = await fetch(request);
	const contentType = res.headers.get('Content-Type');

	// only transform successful HTML requests
	if (res.status < 300 && res.status > 199 && contentType?.startsWith('text/html')) {
		return rewriter.transform(res);
	}

	// handle internal redirects
	if (res.status > 299 && res.status < 400) {
		const newResponse = new Response(res.body, res);
		const loc = res.headers.get('location')

		if (loc?.includes('our.umbraco.com')) {
			const { host } = new URL(request.url);
			const headerVal = loc!.replace('our.umbraco.com', host);

			newResponse.headers.set('location', headerVal);

			return newResponse;
		}
	}

	return res;
}

const rewriter = new HTMLRewriter()
	.on('*', new ContentReplacementHandler());

export default {
	async fetch(request: Request, env: { __STATIC_CONTENT: String; }, ctx: ExecutionContext): Promise<Response> {

		// try to serve static assets from KV
		if (isStatic(request)) {
			return await handleStaticRequest(request, env, ctx);
		};

		// reject put and post requests
		if (request.method === 'PUT' || request.method === 'POST') {
			return new Response('Avast ye scurvy cur!', { status: 405, statusText: 'Method Not Allowed' });
		}

		// redirect login & signup form to our
		if (request.url.match(/\/member\/(login|Signup)/)) {
			const { pathname, search } = new URL(request.url);
			return Response.redirect(`https://our.umbraco.com${pathname}${search}`);
		}

		return await handleHtmlRequest(request);
	},
};
