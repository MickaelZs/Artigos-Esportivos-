import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorias',
  imports: [Header, RouterModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias {

}
