import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyOldOrdersComponent } from './get-my-old-orders.component';

describe('GetMyOldOrdersComponent', () => {
  let component: GetMyOldOrdersComponent;
  let fixture: ComponentFixture<GetMyOldOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMyOldOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyOldOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
