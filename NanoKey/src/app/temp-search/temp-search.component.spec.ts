import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSearchComponent } from './temp-search.component';

describe('TempSearchComponent', () => {
  let component: TempSearchComponent;
  let fixture: ComponentFixture<TempSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
