import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './types/type';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {
  }

  listar(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.API);
  }

  cadastrar(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(this.API, produto);
  }

  editar(produto: Produtos): Observable<Produtos> {
    const url = `${this.API}/${produto.id}`
    return this.http.put<Produtos>(url, produto)
  }

   excluir(id: number): Observable<Produtos> {
    return this.http.delete<Produtos>(this.API + `/${id}`);
  }
}