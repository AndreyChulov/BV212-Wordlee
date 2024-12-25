import Resources from '../resource/singular.json';

export class WordDictionary {
  protected innerDictionary: Array<String> = Resources as Array<String>;

  constructor() {
    //console.log(`this.innerDictionary.length=${this.innerDictionary.length}`);
  }

}
