import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewEditdoctorComponent } from './admin-view-editdoctor.component';

describe('AdminViewEditdoctorComponent', () => {
  let component: AdminViewEditdoctorComponent;
  let fixture: ComponentFixture<AdminViewEditdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewEditdoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewEditdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
