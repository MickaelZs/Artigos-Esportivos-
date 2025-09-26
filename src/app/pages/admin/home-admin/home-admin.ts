import { Component } from '@angular/core';
import { HeaderAdmin } from "../../../shared/header-admin/header-admin";
import { Faixa } from "../../../shared/faixa/faixa";
import { FormProdutos } from "../../../shared/form-produtos/form-produtos";

@Component({
  selector: 'app-home-admin',
  imports: [HeaderAdmin, Faixa],
  templateUrl: './home-admin.html',
  styleUrl: './home-admin.css'
})
export class HomeAdmin {

}
