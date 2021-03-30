import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerAdminComponent } from './get-customer-admin.component';

describe('GetCustomerAdminComponent', () => {
  let component: GetCustomerAdminComponent;
  let fixture: ComponentFixture<GetCustomerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
