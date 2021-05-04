import { HomeComponent } from './home/home.component';
import { LoanQuoteFormComponent } from './loan-quote-form/loan-quote-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'loanquote', 
    component : LoanQuoteFormComponent
  },
  { path: '', 
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
