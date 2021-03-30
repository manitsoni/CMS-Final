import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdminNavbarComponent } from './customer-admin-navbar.component';

describe('CustomerAdminNavbarComponent', () => {
  let component: CustomerAdminNavbarComponent;
  let fixture: ComponentFixture<CustomerAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAdminNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
