import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos';
import { Router } from '@angular/router';
import { Modal } from '../modal/modal';
import { Produtos } from '../../services/types/type';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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
    private cdr: ChangeDetectorRef,
    private modal: MatDialog
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.backdropClass = 'modal-backdrop-blur'; 

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.modal.open(Modal,dialogConfig);
    

    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        this.service.excluir(id).subscribe(() => {
          window.location.reload();
        }, () => {
          
        });
      }
    });
  }
}


}
