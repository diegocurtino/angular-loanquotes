import { AmountValidators } from './../validators/amount-validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { LoanQuoteService } from '../loan-quote-service/loan-quote.service';

@Component({
  selector: 'loan-quote-form',
  templateUrl: './loan-quote-form.component.html',
  styleUrls: ['./loan-quote-form.component.css']
})

export class LoanQuoteFormComponent {
  MIN_AMOUNT = 100;
  MAX_AMOUNT = 1500;
  MULTIPLE_FACTOR = 100;

  form = new FormGroup({
    'amount': new FormControl('',  [
      Validators.required, 
      AmountValidators.mustBeAtLeastOneHundred,
      AmountValidators.mustBeAtMostOneThousandFiveHundred,
      AmountValidators.mustBeMultipleOfOneHundred
    ])
  });

  LoanQuotes: any = [];

  constructor(private service : LoanQuoteService) {}

  get amount(){
    return this.form.get('amount');
  }

  onSubmitLoanRequest() {
    //alert("Click anda");
    return this.service.getLoanQuote().subscribe(
      (res: {}) => {
        this.LoanQuotes = res;
        console.log(res);
      });
  }
}