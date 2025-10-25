import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  titulo = 'Faça seu Login!'
  login = ''
  senha = ''
  botaoDesabilitado: boolean = true;
  constructor(private router: Router) { 

  }
  
  onBotaoClicado() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {

      if (this.login == 'admin' && this.senha == '123') {
         Toastify({
                text: `Bem-vindo ${this.login} !`,
                duration: 3000,
                gravity: "top",
                position: "center",
                className: "toastify-success", 
              }).showToast();

        this.router.navigate(['/admin/home'])
      } else {
        alert(`Dados Inválidos`)
      }
    }
    else {
      alert(`Preencha ambos os campos!`)
    }
  }

}
