async function handleRequest(request: Request): Promise<Response> {

	const res = await fetch(request);
	const contentType = res.headers.get('Content-Type');

	if (contentType?.startsWith('text/html')) {
		return rewriter.transform(res);
	} else {
		return res;
	}
}

class HeadElementHandler implements HTMLRewriterElementContentHandlers {
	element(element: Element): void | Promise<void> {
		element.append('<link rel="stylesheet" type="text/css" href="arrr.css" />', { html: true })
	}
}

const rewriter = new HTMLRewriter().on('head', new HeadElementHandler());

export default {
	async fetch(
		request: Request,
		ctx: ExecutionContext
	): Promise<Response> {
		return await handleRequest(request);
	},
};
