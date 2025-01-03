import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";
import { InvestmentResutsModule } from "./investment-resuts/investment-resuts.module";
import { HeaderModule } from "./header/header.module";

@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule,UserInputModule , InvestmentResutsModule,HeaderModule],
    bootstrap: [AppComponent]
})

export class AppModule {

}