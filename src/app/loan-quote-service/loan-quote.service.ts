import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class LoanQuote {
  monthlyInstallment : number | undefined;
  totalRepayment : number | undefined;
  amountBorrowed : number | undefined;
  interestRate : string | undefined;
}

@Injectable()
export class LoanQuoteService {
  endpointPrefix : string = "http://localhost:8080/online/quote?amountRequested=";
  endpointSuffix : string = "&lendersSource=CSV";
  url : string = "";

  constructor(private httpClient : HttpClient) {}

  getLoanQuote(amount : number): Observable<LoanQuote> {
    this.url = this.endpointPrefix + amount + this.endpointSuffix;
    return this.httpClient.get<LoanQuote>(this.url)
    .pipe(
      retry(1)
    )
  }
}
