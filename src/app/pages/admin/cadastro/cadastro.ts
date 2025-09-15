import { Component } from '@angular/core';
import { HeaderAdmin } from "../../../shared/header-admin/header-admin";
import { FormProdutos } from "../../../shared/form-produtos/form-produtos";


@Component({
  selector: 'app-cadastro',
  imports: [HeaderAdmin, FormProdutos],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

}
