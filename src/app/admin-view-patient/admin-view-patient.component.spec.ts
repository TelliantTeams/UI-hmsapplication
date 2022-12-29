import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPatientComponent } from './admin-view-patient.component';

describe('AdminViewPatientComponent', () => {
  let component: AdminViewPatientComponent;
  let fixture: ComponentFixture<AdminViewPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
