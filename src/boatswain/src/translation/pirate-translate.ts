import { phrases } from "./pirate-phrases";
import { dictionary } from "./pirate-words";

export const rephrase = (text: string) => {

  if (text.includes("Matt")) {
    console.log(text);
  }

  phrases.forEach((v, k) => {
    text = text.replaceAll(k, v)
  });

  return text;
}

function translateWord(word: string) {
  let translated = dictionary[word.toLowerCase()];

  if (translated === undefined) return word;

  if (Array.isArray(translated)) {
    translated = translated[Math.floor(Math.random() * translated.length)]
  }

  else return applyCase(word, translated);
}

// Take the case from wordA and apply it to wordB
function applyCase(wordA: string, wordB: string) {
  // Exception to avoid words like "I" being converted to "ME"
  if (wordA.length === 1 && wordB.length !== 1) return wordB;
  // Uppercase
  if (wordA === wordA.toUpperCase()) return wordB.toUpperCase();
  // Lowercase
  if (wordA === wordA.toLowerCase()) return wordB.toLowerCase();
  // Capitialized
  var firstChar = wordA.slice(0, 1);
  var otherChars = wordA.slice(1);
  if (firstChar === firstChar.toUpperCase() && otherChars === otherChars.toLowerCase()) {
    return wordB.slice(0, 1).toUpperCase() + wordB.slice(1).toLowerCase();
  }
  // Other cases
  return wordB;
};

function isLetter(character: string) {
  if (character.search(/[a-zA-Z'-]/) === -1) return false;
  return true;
}


export const translate = function (text: string) {
  var translatedText = "";

  // Loop through the text, one character at a time.
  var word = "";
  for (var i = 0; i < text.length; i += 1) {
    var character = text[i];
    // If the char is a letter, then we are in the middle of a word, so we
    // should accumulate the letter into the word variable
    if (isLetter(character)) {
      word += character;
    }
    // If the char is not a letter, then we hit the end of a word, so we
    // should translate the current word and add it to the translation
    else {
      if (word != "") {
        // If we've just finished a word, translate it
        var pirateWord = translateWord(word);
        translatedText += pirateWord;
        word = "";
      }
      translatedText += character; // Add the non-letter character
    }
  }

  // If we ended the loop before translating a word, then translate the final
  // word and add it to the translation.
  if (word !== "") translatedText += translateWord(word);

  return translatedText;
};
