import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCVmanageComponent } from './admin-cvmanage.component';

describe('AdminCVmanageComponent', () => {
  let component: AdminCVmanageComponent;
  let fixture: ComponentFixture<AdminCVmanageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCVmanageComponent]
    });
    fixture = TestBed.createComponent(AdminCVmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
