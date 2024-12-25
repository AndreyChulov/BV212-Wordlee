export class LetterInfo {
  private _secretLetter: string;
  public TryWordLetter: string;

  public IsCorrectLetter: boolean;
  public IsLetterInWord: boolean;

  constructor(secretLetter: string, tryWordLetter: string, secretWord: string) {
    if (secretLetter.length === 0 || tryWordLetter.length === 0 || secretWord.length === 0) {
      secretLetter = "1";
      tryWordLetter = "Q";
      secretWord = "23456";
    }


    this._secretLetter = secretLetter;
    this.TryWordLetter = tryWordLetter;

    this.IsCorrectLetter = this._secretLetter === this.TryWordLetter;
    this.IsLetterInWord = secretWord.toLowerCase().includes(this.TryWordLetter.toLowerCase());
  }
}
