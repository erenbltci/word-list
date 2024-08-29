# word-list

- Lists words in languages. Currently there is only Turkish and English.

## Installation

```bash
With npm
npm i @technoeren13/word-list

With yarn
yarn add @technoeren13/word-list
```

## Usage

```ts
import * as searchWord from "word-list";

const wordList = searchWord.wordListArray("tr" /* or en */);
// Returns Array

const result = searchWord.searchWord("kebap", "tr" /* or en */);
// Returns Array

const result = searchWord.startWith("kebap", "tr" /* or en */);
// Returns Array

const result = searchWord.searchWithLength(4, "tr" /* or en */);
// Returns Array

const result = searchWord.isWordExist("kebap", "tr" /* or en */);
// Returns Boolean
```

## Information

# Languages: Turkish, English

- English words are from [here](https://github.com/lorenbrichter/Words/blob/master/Words/en.txt) (274926 words/perhaps)
- Turkish words are from [here](https://github.com/mertemin/turkish-word-list) (63840 words/perhaps)
