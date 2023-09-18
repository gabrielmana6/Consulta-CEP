import { Component } from '@angular/core';
import { Endereco } from '../model/Endereco';
import { EnderecoService } from '../shared/services/endereco/endereco.service';


@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent {
  endereco: Endereco;
  consultaRealizada = false;

  constructor(private enderecoService: EnderecoService){
    this.endereco = new Endereco();
  }

  consultarCep(){
    this.enderecoService.consultarCep(this.endereco.cep).subscribe(
      data =>  {
        this.endereco = data;
      }
    )
    this.consultaRealizada = true;
  }
}
