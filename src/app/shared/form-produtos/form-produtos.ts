import { Component } from '@angular/core';
import { Produtos } from '../../services/types/type';
import { ProdutosService } from '../../services/produtos';
import Toastify from 'toastify-js';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Modal } from '../modal/modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule],
  templateUrl: './form-produtos.html',
  styleUrl: './form-produtos.css'
})
export class FormProdutos {

  produto: Produtos = {} as Produtos;

  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private modal: MatDialog

  ) { }

  submeter() {
    this.service.cadastrar(this.produto).subscribe(() => {
   
    });
  }

  //  abrirDialog() {
  //   const dialogRef = this.modal.open(Modal);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log('Confirmado!');
  //     } else {
  //       console.log('Cancelado!');
  //     }
  //   });
  // }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.produto.imagem = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
