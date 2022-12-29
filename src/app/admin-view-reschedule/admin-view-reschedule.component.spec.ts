import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewRescheduleComponent } from './admin-view-reschedule.component';

describe('AdminViewRescheduleComponent', () => {
  let component: AdminViewRescheduleComponent;
  let fixture: ComponentFixture<AdminViewRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewRescheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
