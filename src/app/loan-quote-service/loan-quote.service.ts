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

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class LoanQuoteService {
  endpoint = "http://localhost:8080/online/quote?amountRequested=200&lendersSource=CSV";

  constructor(private httpClient : HttpClient) {}

  getLoanQuote(): Observable<LoanQuote> {
    return this.httpClient.get<LoanQuote>(this.endpoint)
    .pipe(
      retry(1)
    )
  }
}
