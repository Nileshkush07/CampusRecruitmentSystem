import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompProfileComponent } from './update-comp-profile.component';

describe('UpdateCompProfileComponent', () => {
  let component: UpdateCompProfileComponent;
  let fixture: ComponentFixture<UpdateCompProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCompProfileComponent]
    });
    fixture = TestBed.createComponent(UpdateCompProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
