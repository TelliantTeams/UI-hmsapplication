import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewApprovedrequestsComponent } from './admin-view-approvedrequests.component';

describe('AdminViewApprovedrequestsComponent', () => {
  let component: AdminViewApprovedrequestsComponent;
  let fixture: ComponentFixture<AdminViewApprovedrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewApprovedrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewApprovedrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
