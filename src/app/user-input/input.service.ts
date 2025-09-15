import { Injectable } from '@angular/core';
import { type InputModel } from './input.model';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private userInput: InputModel | null = null;


  calculateInvestmentResults(input: InputModel): any[] {
    const { initialInvestment, yearlyContribution, expectedReturn, duration } = input;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + yearlyContribution;
    const totalInterest =
      investmentValue - yearlyContribution * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: yearlyContribution,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + yearlyContribution * year,
    });
  }

  return annualData;
}

}