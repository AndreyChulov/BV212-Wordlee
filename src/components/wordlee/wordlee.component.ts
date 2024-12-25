import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { InputWordComponent } from '../input-word/input-word.component';
import { Game } from '../../classes/game';

@Component({
  selector: 'Wordlee',
  imports: [FieldComponent, InputWordComponent],
  templateUrl: './wordlee.component.html',
  styleUrl: './wordlee.component.css'
})
export class Wordlee {
  Game:Game = new Game();
}
