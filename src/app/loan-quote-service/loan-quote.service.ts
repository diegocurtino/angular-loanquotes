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

export class Lender {
  name : string | undefined;
  rate : number | undefined;
  availableFunds : number | undefined;
}

@Injectable()
export class LoanQuoteService {
  endpointRoot : string = "http://localhost:8080/online";
  quoteEndpoint: string = "/quote?amountRequested=";
  lendersEndpoint : string = "/lenders"
  endpointSuffix : string = "&lendersSource=CSV";
  url : string = "";

  constructor(private httpClient : HttpClient) {}

  getLoanQuote(amount : number): Observable<LoanQuote> {
    this.url = this.endpointRoot + this.quoteEndpoint + amount + this.endpointSuffix;
    return this.httpClient.get<LoanQuote>(this.url)
    .pipe(
      retry(1)
    )
  }

  getLenders() : Observable<Lender[]> {
    this.url = this.endpointRoot + this.lendersEndpoint;
    return this.httpClient.get<Lender[]>(this.url)
    .pipe(
      retry(1)
    )
  }
}
