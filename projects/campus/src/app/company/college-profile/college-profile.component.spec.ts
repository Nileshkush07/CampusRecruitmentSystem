import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeProfileComponent } from './college-profile.component';

describe('CollegeProfileComponent', () => {
  let component: CollegeProfileComponent;
  let fixture: ComponentFixture<CollegeProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeProfileComponent]
    });
    fixture = TestBed.createComponent(CollegeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
