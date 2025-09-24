import { Component } from '@angular/core';
import { HeaderAdmin } from "../../../shared/header-admin/header-admin";
import { FormProdutos } from "../../../shared/form-produtos/form-produtos";
import { Faixa } from "../../../shared/faixa/faixa";


@Component({
  selector: 'app-cadastro',
  imports: [HeaderAdmin, FormProdutos, Faixa],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

}
