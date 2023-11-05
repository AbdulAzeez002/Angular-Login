import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceLandingComponent } from './finance-landing/finance-landing.component';



@NgModule({
  declarations: [
    FinanceLandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FinanceLandingComponent]
})
export class FinanceModule { }
