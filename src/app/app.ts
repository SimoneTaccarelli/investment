import { Component, Output } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { TableResult } from "./table-result/table-result";
import { InputModel } from './user-input/input.model';


@Component({
  selector: 'app-root',
  imports: [Header, UserInput, TableResult],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  receivedInput: InputModel | null = null;

 onInputReceived(input: InputModel) {
   this.receivedInput = input;
 }
}
