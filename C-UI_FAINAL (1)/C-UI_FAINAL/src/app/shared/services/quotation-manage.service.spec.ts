import { TestBed } from '@angular/core/testing';

import { QuotationManageService } from './quotation-manage.service';

describe('QuotationManageService', () => {
  let service: QuotationManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotationManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
