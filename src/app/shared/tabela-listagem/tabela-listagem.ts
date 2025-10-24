import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos';
import { Router } from '@angular/router';

import { Produtos } from '../../services/types/type';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabela-listagem',
  templateUrl: './tabela-listagem.html',
  styleUrls: ['./tabela-listagem.css'],
  imports: [CommonModule, RouterLink]

})
export class TabelaListagemComponent implements OnInit {

  listaProdutos: Produtos[] = [];
  constructor(
    private service: ProdutosService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (produtos) => {
        this.listaProdutos = produtos;
        this.cdr.detectChanges();
      }
    });
  }

  trackById(index: number, produto: Produtos): string {
    return produto.id ? produto.id.toString() : index.toString();
  }

   excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }


}
