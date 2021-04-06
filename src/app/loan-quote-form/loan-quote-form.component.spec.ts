import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanQuoteFormComponent } from './loan-quote-form.component';

describe('LoanQuoteFormComponent', () => {
  let component: LoanQuoteFormComponent;
  let fixture: ComponentFixture<LoanQuoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanQuoteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
