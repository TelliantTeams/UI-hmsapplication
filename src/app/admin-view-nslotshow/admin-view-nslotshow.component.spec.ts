import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewNslotshowComponent } from './admin-view-nslotshow.component';

describe('AdminViewNslotshowComponent', () => {
  let component: AdminViewNslotshowComponent;
  let fixture: ComponentFixture<AdminViewNslotshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewNslotshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewNslotshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
