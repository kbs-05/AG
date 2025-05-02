import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AST1Component } from './ast1.component';

describe('AST1Component', () => {
  let component: AST1Component;
  let fixture: ComponentFixture<AST1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AST1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AST1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
