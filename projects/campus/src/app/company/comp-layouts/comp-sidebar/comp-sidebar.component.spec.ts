import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSidebarComponent } from './comp-sidebar.component';

describe('CompSidebarComponent', () => {
  let component: CompSidebarComponent;
  let fixture: ComponentFixture<CompSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompSidebarComponent]
    });
    fixture = TestBed.createComponent(CompSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
