import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoComponent } from './endereco.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EnderecoComponent
  ]
})
export class EnderecoModule { }
