import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookingDetailsComponent } from './get-booking-details.component';

describe('GetBookingDetailsComponent', () => {
  let component: GetBookingDetailsComponent;
  let fixture: ComponentFixture<GetBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
