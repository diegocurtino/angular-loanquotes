import { TestBed } from '@angular/core/testing';

import { LoanQuoteService } from './loan-quote.service';

describe('LoanQuoteService', () => {
  let service: LoanQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
