import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBookingDetailsComponent } from './get-all-booking-details.component';

describe('GetAllBookingDetailsComponent', () => {
  let component: GetAllBookingDetailsComponent;
  let fixture: ComponentFixture<GetAllBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
