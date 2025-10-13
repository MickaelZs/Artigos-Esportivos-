import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos';
import { Router } from '@angular/router';

import { Produtos } from '../../services/types/type';


@Component({
  selector: 'app-tabela-listagem',
  imports: [],
  templateUrl: './tabela-listagem.html',
  styleUrl: './tabela-listagem.css'
})
export class TabelaListagem implements OnInit {
   
  listaProdutos: Produtos[] = [];
  constructor(private service: ProdutosService, private router: Router) {

  }

  ngOnInit(): void { 
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
    }) 
   }


}
