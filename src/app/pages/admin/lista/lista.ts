import { Component } from '@angular/core';
import { HeaderAdmin } from "../../../shared/header-admin/header-admin";
import { InputBuscar } from "../../../shared/input-buscar/input-buscar";
import { Faixa } from "../../../shared/faixa/faixa";
import { TabelaListagem } from "../../../shared/tabela-listagem/tabela-listagem";



@Component({
  selector: 'app-lista',
  imports: [HeaderAdmin, InputBuscar, Faixa, TabelaListagem],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  

}
