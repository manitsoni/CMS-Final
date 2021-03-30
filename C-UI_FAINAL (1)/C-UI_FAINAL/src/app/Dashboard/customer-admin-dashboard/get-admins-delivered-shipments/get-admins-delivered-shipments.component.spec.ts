import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdminsDeliveredShipmentsComponent } from './get-admins-delivered-shipments.component';

describe('GetAdminsDeliveredShipmentsComponent', () => {
  let component: GetAdminsDeliveredShipmentsComponent;
  let fixture: ComponentFixture<GetAdminsDeliveredShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdminsDeliveredShipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdminsDeliveredShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
