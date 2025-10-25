import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Usuarios } from '../../services/types/type';
import { UsuariosService } from '../../services/usuarios';

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

  constructor(
    private router: Router,
    private service: UsuariosService
  ) { }

  onBotaoClicado() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {

      this.service.listar().subscribe({
        next: (usuarios: Usuarios[]) => {
          const usuarioValido = usuarios.find(u => u.email === this.login && u.senha === this.senha);

          if (usuarioValido) {
            alert(`Bem-vindo ${this.login}!`);
            this.router.navigate(['/admin/home']);
          } else {
            alert('Email ou senha inválidos.');
          }
        },
        error: (erro) => {
          console.error('Erro ao buscar usuários:', erro);
          alert('Erro ao conectar com o servidor.');
        }
      });

    } else {
      alert('Preencha ambos os campos!');
    }
  }
}
