import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetalhesProduto } from './card-detalhes-produto';

describe('CardDetalhesProduto', () => {
  let component: CardDetalhesProduto;
  let fixture: ComponentFixture<CardDetalhesProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetalhesProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDetalhesProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
