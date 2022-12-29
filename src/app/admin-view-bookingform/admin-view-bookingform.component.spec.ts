import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBookingformComponent } from './admin-view-bookingform.component';

describe('AdminViewBookingformComponent', () => {
  let component: AdminViewBookingformComponent;
  let fixture: ComponentFixture<AdminViewBookingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewBookingformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewBookingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
