import { Dictionary } from "./dictionary";

const piratePhrases: Dictionary<string> = {
  "Matt Brailsford": "Matt Redbeard Brailsford",
  "our.umbraco.com": "arrr.umbraco.community",
  "Our Umbraco" : "Arrr Umbraco",
  "karma points" : "doubloons",
}

export const phrases = new Map(Object.entries(piratePhrases));