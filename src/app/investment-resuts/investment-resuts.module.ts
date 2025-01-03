import { NgModule } from "@angular/core";
import { InvestmentResutsComponent } from "./investment-resuts.component";
import { CurrencyPipe } from "@angular/common";

@NgModule({
    declarations:[InvestmentResutsComponent],
    imports:[CurrencyPipe],
    exports:[InvestmentResutsComponent]

})
export class InvestmentResutsModule{

}