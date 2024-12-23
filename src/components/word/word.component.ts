import { Component } from '@angular/core';
import { LetterComponent } from '../letter/letter.component';

@Component({
  selector: 'Word',
  imports: [LetterComponent],
  templateUrl: './word.component.html',
  styleUrl: './word.component.css'
})
export class WordComponent {

}
