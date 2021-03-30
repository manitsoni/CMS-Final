import { TestBed } from '@angular/core/testing';

import { OfficeRegService } from './office-reg.service';

describe('OfficeRegService', () => {
  let service: OfficeRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
