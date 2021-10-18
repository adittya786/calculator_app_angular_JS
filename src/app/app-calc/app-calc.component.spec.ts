import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalcComponent } from './app-calc.component';

describe('AppCalcComponent', () => {
  let component: AppCalcComponent;
  let fixture: ComponentFixture<AppCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
