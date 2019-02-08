import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exec1Component } from './exec1.component';

describe('Exec1Component', () => {
  let component: Exec1Component;
  let fixture: ComponentFixture<Exec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
