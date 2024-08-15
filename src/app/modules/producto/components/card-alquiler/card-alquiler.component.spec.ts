import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlquilerComponent } from './card-alquiler.component';

describe('CardAlquilerComponent', () => {
  let component: CardAlquilerComponent;
  let fixture: ComponentFixture<CardAlquilerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAlquilerComponent]
    });
    fixture = TestBed.createComponent(CardAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
