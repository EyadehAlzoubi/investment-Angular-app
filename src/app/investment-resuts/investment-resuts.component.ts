import { Component,computed,input,Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-resuts',
  templateUrl: './investment-resuts.component.html',
  styleUrl: './investment-resuts.component.css'
})
export class InvestmentResutsComponent {
  // results = input<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>();

  constructor(private investmentService:InvestmentService){}

  // get results(){
  //   return this.investmentService.resultsData;
  // }

  results = computed(()=> this.investmentService.resultsData());


  // @Input() results?:{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

}
