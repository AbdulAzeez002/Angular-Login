import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceLandingComponent } from './finance-landing.component';

describe('FinanceLandingComponent', () => {
  let component: FinanceLandingComponent;
  let fixture: ComponentFixture<FinanceLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceLandingComponent]
    });
    fixture = TestBed.createComponent(FinanceLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
