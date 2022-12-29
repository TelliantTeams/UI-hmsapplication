import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewEditpatientComponent } from './admin-view-editpatient.component';

describe('AdminViewEditpatientComponent', () => {
  let component: AdminViewEditpatientComponent;
  let fixture: ComponentFixture<AdminViewEditpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewEditpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewEditpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
