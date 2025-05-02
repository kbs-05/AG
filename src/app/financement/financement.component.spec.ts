import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FINANCEMENTComponent } from './financement.component';

describe('FINANCEMENTComponent', () => {
  let component: FINANCEMENTComponent;
  let fixture: ComponentFixture<FINANCEMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FINANCEMENTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FINANCEMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
