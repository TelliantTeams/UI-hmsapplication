import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewNbookingformComponent } from './admin-view-nbookingform.component';

describe('AdminViewNbookingformComponent', () => {
  let component: AdminViewNbookingformComponent;
  let fixture: ComponentFixture<AdminViewNbookingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewNbookingformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewNbookingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
