import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdminDashboardComponent } from './customer-admin-dashboard.component';

describe('CustomerAdminDashboardComponent', () => {
  let component: CustomerAdminDashboardComponent;
  let fixture: ComponentFixture<CustomerAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
