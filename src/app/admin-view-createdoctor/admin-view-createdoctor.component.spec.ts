import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCreatedoctorComponent } from './admin-view-createdoctor.component';

describe('AdminViewCreatedoctorComponent', () => {
  let component: AdminViewCreatedoctorComponent;
  let fixture: ComponentFixture<AdminViewCreatedoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewCreatedoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewCreatedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
