import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  @Output() calculate = new EventEmitter<{initialInvestment:number , annualInvestment:number,expectedReturn:number,duration:number}>();

  Initial = "0";
  Annual = "0";
  Expected = "0";
  Duration = "0";
  

  onSubmit(){
    this.calculate.emit({
      initialInvestment:+this.Initial,
      annualInvestment:+this.Annual,
      expectedReturn:+this.Expected,
      duration:+this.Duration
   });
  }

}
