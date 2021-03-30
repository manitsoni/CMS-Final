import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuotationDetailsComponent } from './get-quotation-details.component';

describe('GetQuotationDetailsComponent', () => {
  let component: GetQuotationDetailsComponent;
  let fixture: ComponentFixture<GetQuotationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQuotationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuotationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
