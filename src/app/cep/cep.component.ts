import { Component } from '@angular/core';
import { CepService } from '../shared/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent {
  cep: string;
  cepData: any; // Variável para armazenar os dados do CEP

  constructor(private cepService: CepService) {
    this.cep = '01001000';
  }

  buscarCEP() {
    this.cepService.buscarCEP(this.cep).subscribe((data) => {
      this.cepData = data;
      console.log("dados:" + this.cep)
    });
  }
}
