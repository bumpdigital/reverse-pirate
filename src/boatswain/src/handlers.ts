import { translate } from "pirate-speak"

export class FooterElementHandler implements HTMLRewriterElementContentHandlers {
  element(element: Element): void | Promise<void> {

    if (element.tagName != 'footer') {
      return;
    }
    element.append('<p>🏴‍☠️ An act of piracy brought to you by the crew of <a href="https://bump.digital/" target="_blank">Bump Digital.</a>', { html: true })
  }
}

export class HeadElementHandler implements HTMLRewriterElementContentHandlers {
  element(element: Element): void | Promise<void> {

    if (element.tagName != 'head') {
      return;
    }

    element.append('<link rel="stylesheet" type="text/css" href="/assets/arrr.css" />', { html: true })
    element.append('<meta name="robots" content="noindex">', { html: true })
  }
}

export class TextReplacementHandler implements HTMLRewriterElementContentHandlers {
  text(text: Text): void | Promise<void> {
    text.replace(translate(text.text), { html: true });
  }
}
