import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InputModel } from './input.model';


@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  @Output() inputSubmitted = new EventEmitter<InputModel>();

  inputUser: InputModel = {
    initialInvestment: 0,
    yearlyContribution: 0,
    expectedReturn: 0,
    duration: 0
  };

 

  onSubmit() {
    const inputUser: InputModel = {
      initialInvestment: this.inputUser.initialInvestment,
      yearlyContribution: this.inputUser.yearlyContribution,
      expectedReturn: this.inputUser.expectedReturn,
      duration: this.inputUser.duration
    };
    this.inputSubmitted.emit(inputUser);
    console.log(this.inputUser);
  }

}
