import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateprofileComponent } from './student-updateprofile.component';

describe('StudentUpdateprofileComponent', () => {
  let component: StudentUpdateprofileComponent;
  let fixture: ComponentFixture<StudentUpdateprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentUpdateprofileComponent]
    });
    fixture = TestBed.createComponent(StudentUpdateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
