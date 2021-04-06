import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoanQuoteFormComponent } from './loan-quote-form/loan-quote-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoanQuoteService } from './loan-quote-service/loan-quote.service';

@NgModule({
  declarations: [
    LoanQuoteFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoanQuoteService],
  bootstrap: [LoanQuoteFormComponent]
})

export class AppModule { }
