import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeliveredBookingsComponent } from './get-delivered-bookings.component';

describe('GetDeliveredBookingsComponent', () => {
  let component: GetDeliveredBookingsComponent;
  let fixture: ComponentFixture<GetDeliveredBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDeliveredBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeliveredBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
