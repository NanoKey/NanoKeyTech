import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveSearchComponent } from './executive-search.component';

describe('ExecutiveSearchComponent', () => {
  let component: ExecutiveSearchComponent;
  let fixture: ComponentFixture<ExecutiveSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
