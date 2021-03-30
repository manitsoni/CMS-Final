import { TestBed } from '@angular/core/testing';

import { CompanyRegisService } from './company-regis.service';

describe('CompanyRegisService', () => {
  let service: CompanyRegisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyRegisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
