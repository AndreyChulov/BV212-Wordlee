import { WordDictionary } from './word-dictionary';

export class WordsLibrary extends WordDictionary {
  readonly LibrarySize = this.innerDictionary.length;

  public GetWord(length: number) : string {

    let word : String = ""

    do {
      let wordIndex = Math.round(Math.random() * this.LibrarySize);
      word =  this.innerDictionary[wordIndex];
    } while (word.length !== length);

    return word as string;
  }
}
