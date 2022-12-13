import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewAppointmentComponent } from './doctor-view-appointment.component';

describe('DoctorViewAppointmentComponent', () => {
  let component: DoctorViewAppointmentComponent;
  let fixture: ComponentFixture<DoctorViewAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorViewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
