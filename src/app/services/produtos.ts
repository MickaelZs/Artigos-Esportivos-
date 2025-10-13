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
  
}


//  listar(): Produtos [] {
//     return [
//       {id: 1, nome: 'Nike Winflo 11', categoria: 'Corrida', valor: 899.99},
//       {id: 2, nome: 'Nike Air Zoom Pegasus 39', categoria: 'Corrida', valor: 799.99},
//       {id: 3, nome: 'Nike Air Max Infinity 2', categoria: 'Corrida', valor: 699.99},
//       {id: 4, nome: 'Nike Quest 4', categoria: 'Corrida', valor: 599.99},
//       {id: 5, nome: 'Nike Revolution 6 Next Nature', categoria: 'Corrida', valor: 499.99},
//       {id: 6, nome: 'Nike Air Max Excee', categoria: 'Casual', valor: 399.99},
//      ]
//   } 