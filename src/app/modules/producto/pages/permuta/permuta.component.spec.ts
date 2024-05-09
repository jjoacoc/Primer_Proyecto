import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutaComponent } from './permuta.component';

describe('PermutaComponent', () => {
  let component: PermutaComponent;
  let fixture: ComponentFixture<PermutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermutaComponent]
    });
    fixture = TestBed.createComponent(PermutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
