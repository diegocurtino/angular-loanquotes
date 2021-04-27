import { AppComponent } from './app.component';
import { LoanQuoteFormComponent } from './loan-quote-form/loan-quote-form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoanQuoteService } from './loan-quote-service/loan-quote.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoanQuoteFormComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoanQuoteService],
  bootstrap: [AppComponent]
})

export class AppModule { }