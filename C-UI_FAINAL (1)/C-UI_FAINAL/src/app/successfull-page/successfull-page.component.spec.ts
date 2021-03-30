import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullPageComponent } from './successfull-page.component';

describe('SuccessfullPageComponent', () => {
  let component: SuccessfullPageComponent;
  let fixture: ComponentFixture<SuccessfullPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
