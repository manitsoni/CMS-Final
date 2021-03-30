import { TestBed } from '@angular/core/testing';

import { CustomerEditService } from './customer-edit.service';

describe('CustomerEditService', () => {
  let service: CustomerEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
