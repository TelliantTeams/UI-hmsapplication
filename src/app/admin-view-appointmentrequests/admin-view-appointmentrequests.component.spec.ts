import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAppointmentrequestsComponent } from './admin-view-appointmentrequests.component';

describe('AdminViewAppointmentrequestsComponent', () => {
  let component: AdminViewAppointmentrequestsComponent;
  let fixture: ComponentFixture<AdminViewAppointmentrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAppointmentrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewAppointmentrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
