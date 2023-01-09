import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxdesignComponent } from './fxdesign.component';

describe('FxdesignComponent', () => {
  let component: FxdesignComponent;
  let fixture: ComponentFixture<FxdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxdesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FxdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
