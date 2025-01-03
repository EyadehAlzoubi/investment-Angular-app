import { CurrencyPipe } from '@angular/common';
import { Component,input,Input } from '@angular/core';

@Component({
  selector: 'app-investment-resuts',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-resuts.component.html',
  styleUrl: './investment-resuts.component.css'
})
export class InvestmentResutsComponent {
  results = input<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[]>();

  // @Input() results?:{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

}
