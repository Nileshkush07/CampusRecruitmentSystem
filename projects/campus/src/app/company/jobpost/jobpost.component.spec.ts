import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostComponent } from './jobpost.component';

describe('JobpostComponent', () => {
  let component: JobpostComponent;
  let fixture: ComponentFixture<JobpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobpostComponent]
    });
    fixture = TestBed.createComponent(JobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
