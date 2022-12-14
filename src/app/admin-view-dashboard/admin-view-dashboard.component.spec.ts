import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDashboardComponent } from './admin-view-dashboard.component';

describe('AdminViewDashboardComponent', () => {
  let component: AdminViewDashboardComponent;
  let fixture: ComponentFixture<AdminViewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
