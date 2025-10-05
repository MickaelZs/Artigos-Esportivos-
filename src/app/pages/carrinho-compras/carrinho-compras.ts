import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-carrinho-compras',
  imports: [Header],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.css'
})
export class CarrinhoCompras {

  valorContador: number = 0;

  incrementar(): void {
    this.valorContador++;
  }

  descrementar(): void {
    if (this.valorContador > 0) {
      this.valorContador--;
    }
  }
  

}
