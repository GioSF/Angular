import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Est1Component } from './est1.component';

describe('Est1Component', () => {
  let component: Est1Component;
  let fixture: ComponentFixture<Est1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Est1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Est1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
