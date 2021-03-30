import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeliveredShipmentsComponent } from './get-delivered-shipments.component';

describe('GetDeliveredShipmentsComponent', () => {
  let component: GetDeliveredShipmentsComponent;
  let fixture: ComponentFixture<GetDeliveredShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDeliveredShipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeliveredShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
