import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHealthTipFormComponent } from './admin-health-tip-form.component';

describe('AdminHealthTipFormComponent', () => {
  let component: AdminHealthTipFormComponent;
  let fixture: ComponentFixture<AdminHealthTipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminHealthTipFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHealthTipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
