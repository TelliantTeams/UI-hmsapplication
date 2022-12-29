import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewTodayappComponent } from './admin-view-todayapp.component';

describe('AdminViewTodayappComponent', () => {
  let component: AdminViewTodayappComponent;
  let fixture: ComponentFixture<AdminViewTodayappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewTodayappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewTodayappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
