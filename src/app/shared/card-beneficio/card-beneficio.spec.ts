import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBeneficio } from './card-beneficio';

describe('CardBeneficio', () => {
  let component: CardBeneficio;
  let fixture: ComponentFixture<CardBeneficio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBeneficio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBeneficio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
