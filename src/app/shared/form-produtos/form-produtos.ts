import { Component } from '@angular/core';
import { Produtos } from '../../services/types/type';
import { ProdutosService } from '../../services/produtos';

import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    private route: ActivatedRoute) { }

  submeter() {
    this.service.cadastrar(this.produto).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
    });
  }

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
