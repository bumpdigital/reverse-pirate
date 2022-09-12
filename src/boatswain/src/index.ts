import { getAssetFromKV } from "@cloudflare/kv-asset-handler"
import manifestJSON from '__STATIC_CONTENT_MANIFEST'
import { FooterElementHandler, HeadElementHandler, TextReplacementHandler } from "./handlers";

const assetManifest = JSON.parse(manifestJSON)

const staticFiles = ['css', 'png', 'jpg', 'svg', 'map'];

export const isStatic = (request: Request) => staticFiles.some(f => request.url.endsWith('.' + f));

async function handleStaticRequest(request: Request, env: { __STATIC_CONTENT: String; }, ctx: ExecutionContext) {
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
		return await fetch(request);
	}
}

async function handleHtmlRequest(request: Request): Promise<Response> {
	const res = await fetch(request);
	const contentType = res.headers.get('Content-Type');

	if (contentType?.startsWith('text/html')) {
		return rewriter.transform(res);
	} else {
		return res;
	}
}

const rewriter = new HTMLRewriter()
	.on('head', new HeadElementHandler())
	.on('footer', new FooterElementHandler())
	.on('*', new TextReplacementHandler());

export default {
	async fetch(request: Request, env: { __STATIC_CONTENT: String; }, ctx: ExecutionContext): Promise<Response> {

		if (isStatic(request)) {
			return await handleStaticRequest(request, env, ctx);
		};

		if (request.method === 'PUT' || request.method === 'POST') {
			return new Response('Avast ye scurvy cur!');
		}

		if (request.url.match('/member/(login|Signup)')) {
			const { pathname, search } = new URL(request.url);
			return Response.redirect(`https://our.umbraco.com${pathname}${search}`);
		}

		return await handleHtmlRequest(request);
	},
};
