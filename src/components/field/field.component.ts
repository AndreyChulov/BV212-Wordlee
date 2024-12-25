import {Component, Input} from '@angular/core';
import { WordComponent} from '../word/word.component';
import { Game } from '../../classes/game';
import {WordInfo} from '../../classes/word-info';

@Component({
  selector: 'Field',
  imports: [WordComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  @Input({required: true}) Game: Game | undefined;
  protected readonly EmptyWordInfo = new WordInfo("", "");
}
