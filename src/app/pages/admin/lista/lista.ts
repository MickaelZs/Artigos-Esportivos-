import { Component } from '@angular/core';
import { HeaderAdmin } from "../../../shared/header-admin/header-admin";
import { InputBuscar } from "../../../shared/input-buscar/input-buscar";


@Component({
  selector: 'app-lista',
  imports: [HeaderAdmin, InputBuscar],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

}
