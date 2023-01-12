import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewNpaymentwindowComponent } from './admin-view-npaymentwindow.component';

describe('AdminViewNpaymentwindowComponent', () => {
  let component: AdminViewNpaymentwindowComponent;
  let fixture: ComponentFixture<AdminViewNpaymentwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewNpaymentwindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewNpaymentwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
