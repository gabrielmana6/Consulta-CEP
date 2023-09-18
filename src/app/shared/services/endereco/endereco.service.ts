import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from 'src/app/model/Endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  url = 'https://viacep.com.br/ws/';
  jsonFormat = '/json/';
  constructor(private http: HttpClient) { }

  consultarCep(cep: string): Observable<any> {
    return this.http.get(this.url + cep + this.jsonFormat);
  }
}
