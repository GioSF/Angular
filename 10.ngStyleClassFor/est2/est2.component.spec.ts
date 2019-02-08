import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Est2Component } from './est2.component';

describe('Est2Component', () => {
  let component: Est2Component;
  let fixture: ComponentFixture<Est2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Est2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Est2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
