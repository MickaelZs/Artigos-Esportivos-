import { Component } from '@angular/core';
import { HeaderAdmin } from "../../../shared/header-admin/header-admin";
import { InputBuscar } from "../../../shared/input-buscar/input-buscar";
import { DetalhesProdutos } from "../../detalhes-produtos/detalhes-produtos";
import { Faixa } from "../../../shared/faixa/faixa";
import { TabelaListagem } from "../../../shared/tabela-listagem/tabela-listagem";
import { FormProdutos } from "../../../shared/form-produtos/form-produtos";
import { CardProdutos } from "../../../shared/card-produtos/card-produtos";


@Component({
  selector: 'app-lista',
  imports: [HeaderAdmin, InputBuscar, Faixa, TabelaListagem],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

}
