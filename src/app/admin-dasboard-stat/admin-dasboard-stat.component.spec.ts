import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDasboardStatComponent } from './admin-dasboard-stat.component';

describe('AdminDasboardStatComponent', () => {
  let component: AdminDasboardStatComponent;
  let fixture: ComponentFixture<AdminDasboardStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDasboardStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDasboardStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
