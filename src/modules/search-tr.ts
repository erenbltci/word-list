import fs from "fs";
import path from "path";
import { Language } from "../types";

export const wordListArray = (lang: Language) => {
  const wordList = fs.readFileSync(
    path.join(__dirname, `../words/${lang}.txt`),
    "utf8"
  );
  const wordListArray = wordList.split("\n");
  return wordListArray;
};

export const searchWord = (word: string, lang: Language) => {
  const wordList = wordListArray(lang);

  const result = wordList.filter((w) => w.includes(word));
  return result;
};

export const startWith = (word: string, lang: Language) => {
  const wordList = wordListArray(lang);

  const result = wordList.filter((w) => w.startsWith(word));
  return result;
};

export const searchWithLength = (length: Number, lang: Language) => {
  const wordList = wordListArray(lang);

  const result = wordList.filter((w) => w.length === length);
  return result;
};

export const isWordExist = (word: string, lang: Language) => {
  const wordList = wordListArray(lang);

  const result = wordList.includes(word);
  return result;
};
