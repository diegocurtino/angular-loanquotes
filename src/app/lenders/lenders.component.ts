import { Lender, LoanQuoteService } from './../loan-quote-service/loan-quote.service';
import { Component } from '@angular/core';

@Component({
  selector: 'lenders',
  templateUrl: './lenders.component.html',
  styleUrls: ['./lenders.component.css']
})

export class LendersComponent {
  lenders : Lender[] = new Array();

  constructor(private service : LoanQuoteService) {
    this.loadLenders();
  }

  private loadLenders() : Lender[] {
    this.service.getLenders().subscribe(
      (res: Lender[]) => {
        this.lenders = res;
      });
    return this.lenders;
  }
}