import {Component, Input} from '@angular/core';
import { LetterComponent } from '../letter/letter.component';
import { WordInfo } from '../../classes/word-info';
import { LetterInfo } from '../../classes/letter-info';

@Component({
  selector: 'Word',
  imports: [LetterComponent],
  templateUrl: './word.component.html',
  styleUrl: './word.component.css'
})
export class WordComponent {
  @Input() WordInfo: WordInfo | undefined;
  protected readonly EmptyLetterInfo = new LetterInfo("", "", "");
}
