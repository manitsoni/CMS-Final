import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyOrdersComponent } from './get-my-orders.component';

describe('GetMyOrdersComponent', () => {
  let component: GetMyOrdersComponent;
  let fixture: ComponentFixture<GetMyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMyOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
