import { Component } from '@angular/core';
import { CardDetalhesProduto } from "../../shared/card-detalhes-produto/card-detalhes-produto";
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-detalhes-produtos',
  imports: [CardDetalhesProduto, Header],
  templateUrl: './detalhes-produtos.html',
  styleUrl: './detalhes-produtos.css'
})
export class DetalhesProdutos {

}
