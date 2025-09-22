import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-detalhes-produto',
  imports: [CommonModule],
  templateUrl: './card-detalhes-produto.html',
  styleUrl: './card-detalhes-produto.css'
})
export class CardDetalhesProduto {

    imagemPrincipal: string = '../../../assets/images/image 6.jpg'; 
  miniaturas: string[] = [
    '../../../assets/images/image 6.jpg',
    '../../../assets/images/image 7.jpg',
    '../../../assets/images/image 8.jpg',
    '../../../assets/images/image 9.jpg'
  ];

  trocarImagemPrincipal(imagemSelecionada: string): void {
    this.imagemPrincipal = imagemSelecionada;
  }

}
