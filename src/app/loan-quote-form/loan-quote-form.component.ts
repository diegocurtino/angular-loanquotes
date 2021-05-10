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
  showTable = false;
  loanQuote: any = {};

  form = new FormGroup({
    'amount': new FormControl('',  [
      Validators.required, 
      AmountValidators.mustBeAtLeastOneHundred,
      AmountValidators.mustBeAtMostOneThousandFiveHundred,
      AmountValidators.mustBeMultipleOfOneHundred
    ])
  });

  constructor(private service : LoanQuoteService) {}

  get amount(){
    return this.form.get('amount');
  }

  onSubmitLoanRequest() {
    this.loanQuote = this.service.getLoanQuote(this.amount?.value).subscribe(
      (res: {}) => {
        this.loanQuote = res;
        this.showTable = true;
      });

      // If the user is typing, hide the table with the quote table.
      this.amount?.valueChanges.subscribe(() => { this.showTable = false });
  }
}