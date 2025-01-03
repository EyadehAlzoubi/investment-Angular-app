import { Component, EventEmitter, Input, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Input({required:true}) Initial?:number;
  // @Input({required:true}) Annual?:number;
  // @Input({required:true}) Expected?:number;
  // @Input({required:true}) Duration?:number;

  // @Output() calculate = new EventEmitter<InvestmentInput>();
  calculate = output<InvestmentInput>();

  Initial = signal("0");
  Annual = signal("0");
  Expected = signal("0");
  Duration = signal("20");
  

  onSubmit(){
    this.calculate.emit({
      initialInvestment:+this.Initial(),
      annualInvestment:+this.Annual(),
      expectedReturn:+this.Expected(),
      duration:+this.Duration()
   });
  }

}
