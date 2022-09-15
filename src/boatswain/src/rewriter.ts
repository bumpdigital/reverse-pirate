import { rephrase, translate } from "./translation/pirate-translate";

export class ContentReplacementHandler implements HTMLRewriterElementContentHandlers {

  element(element: Element): void | Promise<void> {

    if (element.tagName === 'head') {
      element.append('<link rel="stylesheet" type="text/css" href="/assets/arrr.css" />', { html: true })
      element.append('<meta name="robots" content="noindex">', { html: true })
    }

    if (element.tagName === 'footer') {
      element.append('<p>🏴‍☠️ An act of piracy by the crew of <a href="https://bump.digital/" target="_blank">Bump Digital.</a>', { html: true })
    }

    if (element.tagName === 'a') {
      const attr = element.getAttribute('href');
      if (attr?.includes('our.umbraco.com')) {
        element.setAttribute('href', attr.replace('our.umbraco.com', 'arrr.umbraco.community'))
      }
    }
  }

  text(text: Text): void | Promise<void> {

    // we can't be too clever here as text is streamed in chunks that have no context

    // replace specific multi-word target phrases that are common to 'Our'
    // e.g. karma points => doubloons
    // community member names etc.
    var rePhrased = rephrase(text.text);

    // then perform single word translations
    var translated = translate(rePhrased)

    text.replace(translated, { html: true });
  }
}
