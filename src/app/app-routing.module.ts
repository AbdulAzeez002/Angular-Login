import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { FinanceLandingComponent } from './finance/finance-landing/finance-landing.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  {path:'login',component:LoginComponent},
  {path:'finance',component:FinanceLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
