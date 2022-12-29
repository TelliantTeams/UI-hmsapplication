import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDoctorComponent } from './admin-view-doctor.component';

describe('AdminViewDoctorComponent', () => {
  let component: AdminViewDoctorComponent;
  let fixture: ComponentFixture<AdminViewDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
