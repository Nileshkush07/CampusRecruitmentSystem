import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNavBarComponent } from './public-nav-bar.component';

describe('PublicNavBarComponent', () => {
  let component: PublicNavBarComponent;
  let fixture: ComponentFixture<PublicNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicNavBarComponent]
    });
    fixture = TestBed.createComponent(PublicNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
