import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomersQuotationComponent } from './get-customers-quotation.component';

describe('GetCustomersQuotationComponent', () => {
  let component: GetCustomersQuotationComponent;
  let fixture: ComponentFixture<GetCustomersQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomersQuotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomersQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
