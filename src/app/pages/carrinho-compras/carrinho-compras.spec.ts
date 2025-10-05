import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoCompras } from './carrinho-compras';

describe('CarrinhoCompras', () => {
  let component: CarrinhoCompras;
  let fixture: ComponentFixture<CarrinhoCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoCompras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoCompras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
