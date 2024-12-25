import { LetterInfo } from './letter-info';

export class WordInfo {
  public LetterInfo: Array<LetterInfo>;

  constructor(secretWord: string, tryWord: string) {
    this.LetterInfo = new Array<LetterInfo>();

    if (secretWord.length === 0 || tryWord.length === 0) {
      secretWord = "     ";
      tryWord = "12345";
    }

    for (let counter = 0; counter < 5; counter++) {
      this.LetterInfo.push(new LetterInfo(secretWord[counter], tryWord[counter], secretWord));
    }
  }
}
