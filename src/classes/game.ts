import { WordsLibrary } from './words-library';
import { WordInfo } from './word-info';

export class Game {
  private WordsLibrary: WordsLibrary = new WordsLibrary();
  public SecretWord: string = this.WordsLibrary.GetWord(5);
  public Tries: Array<WordInfo | undefined> = new Array<WordInfo | undefined>(5);

  AddNewWorld(word:string){
    console.log(word);
    alert(word);
    console.log(`SecretWord = ${this.SecretWord}`);

    if (this.SecretWord === word) {
      alert("You are winner!!!")
    } else {
      if (this.Tries[1] !== undefined){
        alert("You lose!!!");
      } else {
        this.Tries.shift()
        this.Tries.push(new WordInfo(this.SecretWord, word))
      }
    }
  }
}
