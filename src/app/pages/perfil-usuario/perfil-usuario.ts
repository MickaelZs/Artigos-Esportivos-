import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-perfil-usuario',
  imports: [FormsModule, Header],
  templateUrl: './perfil-usuario.html',
  styleUrl: './perfil-usuario.css'
})
export class PerfilUsuario {
   usuario = {
    nome: 'Mickael',
    email: 'mickaelcosta@gmail.com',
    senha: '*************'
  };

  editar() {
    alert('Função de edição ainda não implementada!');
  }

}
