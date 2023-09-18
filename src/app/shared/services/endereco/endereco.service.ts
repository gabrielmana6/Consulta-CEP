import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from 'src/app/model/Endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  url = 'https://viacep.com.br/ws/';
  //url = 'https://viacep.com.br/ws/01001000/json/';
  constructor(private http: HttpClient) { }

  buscarCep(): Observable<any> {
    return this.http.get('https://viacep.com.br/ws/01001000/json/');
  }
}
