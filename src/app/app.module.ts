import { AppComponent } from './app.component';
import { LoanQuoteFormComponent } from './loan-quote-form/loan-quote-form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoanQuoteService } from './loan-quote-service/loan-quote.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LendersComponent } from './lenders/lenders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanQuoteFormComponent,
    HomeComponent,
    NavBarComponent,
    LendersComponent
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