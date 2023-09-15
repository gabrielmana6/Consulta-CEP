import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepComponent } from './cep.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CepComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CepComponent
  ]
})
export class CepModule { }
