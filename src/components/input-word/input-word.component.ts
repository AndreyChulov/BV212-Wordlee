import {Component, Input} from '@angular/core';
import { Game } from '../../classes/game';

@Component({
  selector: 'InputWord',
  imports: [],
  templateUrl: './input-word.component.html',
  styleUrl: './input-word.component.css'
})
export class InputWordComponent {
  readonly EnterWordPlease: string = "Enter word please...";

  InputWord: string = this.EnterWordPlease;

  @Input({required: true}) Game: Game | undefined;

  InputClick(mouseEvent: MouseEvent) {
    this.InputWord = "";
    //console.log(mouseEvent);
  }

  InputChange(event:Event) {
    let inputControl  = event.target as HTMLInputElement;

    inputControl.value = this.EnterWordPlease;
    this.InputWord = inputControl.value

    //console.log(event);
  }

  KeyDown(event: KeyboardEvent) {
    let inputControl  = event.target as HTMLInputElement;

    if (event.key === 'Enter') {

      if (this.Game === undefined){
        throw new Error("Game should be defined in this stage")
      }

      this.Game.AddNewWorld(inputControl.value);

      inputControl.value = "";
      this.InputWord = inputControl.value;
    } else {
      this.InputWord = inputControl.value;
      //console.log(this.InputWord);
    }
  }
}
