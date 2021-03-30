import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyCustomerComponent } from './get-my-customer.component';

describe('GetMyCustomerComponent', () => {
  let component: GetMyCustomerComponent;
  let fixture: ComponentFixture<GetMyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMyCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
