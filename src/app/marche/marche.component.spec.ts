import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MARCHEComponent } from './marche.component';

describe('MARCHEComponent', () => {
  let component: MARCHEComponent;
  let fixture: ComponentFixture<MARCHEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MARCHEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MARCHEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
