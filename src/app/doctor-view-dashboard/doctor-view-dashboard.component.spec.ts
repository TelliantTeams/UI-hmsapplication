import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewDashboardComponent } from './doctor-view-dashboard.component';

describe('DoctorViewDashboardComponent', () => {
  let component: DoctorViewDashboardComponent;
  let fixture: ComponentFixture<DoctorViewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorViewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
