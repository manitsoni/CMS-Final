import { TestBed } from '@angular/core/testing';

import { QuotationListService } from './quotation-list.service';

describe('QuotationListService', () => {
  let service: QuotationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
