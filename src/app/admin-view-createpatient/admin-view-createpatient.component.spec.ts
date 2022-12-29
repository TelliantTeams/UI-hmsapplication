import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCreatepatientComponent } from './admin-view-createpatient.component';

describe('AdminViewCreatepatientComponent', () => {
  let component: AdminViewCreatepatientComponent;
  let fixture: ComponentFixture<AdminViewCreatepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewCreatepatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewCreatepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
