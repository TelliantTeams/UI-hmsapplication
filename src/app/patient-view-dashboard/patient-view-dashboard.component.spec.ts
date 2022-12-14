import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewDashboardComponent } from './patient-view-dashboard.component';

describe('PatientViewDashboardComponent', () => {
  let component: PatientViewDashboardComponent;
  let fixture: ComponentFixture<PatientViewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientViewDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientViewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
