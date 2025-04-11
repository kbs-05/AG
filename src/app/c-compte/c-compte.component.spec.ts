import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCOMPTEComponent } from './c-compte.component';

describe('CCOMPTEComponent', () => {
  let component: CCOMPTEComponent;
  let fixture: ComponentFixture<CCOMPTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCOMPTEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCOMPTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
