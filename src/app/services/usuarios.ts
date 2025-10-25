import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from './types/type';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {
  }

  listar(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.API);
  }

  cadastrar(usuarios: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.API, usuarios);
  }

}