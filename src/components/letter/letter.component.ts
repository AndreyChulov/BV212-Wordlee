import {Component, Input} from '@angular/core';
import {LetterInfo} from '../../classes/letter-info';

@Component({
  selector: 'Letter',
  imports: [],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  @Input() LetterInfo: LetterInfo = new LetterInfo("", "", "");

  Letter: string = (this.LetterInfo === undefined) ? "" : this.LetterInfo?.TryWordLetter;
  StyleColor: string = (this.LetterInfo === undefined) ? "white" :
                        this.LetterInfo?.IsCorrectLetter ? "green" :
                          this.LetterInfo?.IsLetterInWord ? "yellow" : "white"
}
