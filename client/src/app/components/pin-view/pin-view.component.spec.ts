import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinViewComponent } from './pin-view.component';

describe('PinViewComponent', () => {
  let component: PinViewComponent;
  let fixture: ComponentFixture<PinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
