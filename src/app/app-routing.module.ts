import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';

const routes: Routes = [
  {
    path: 'consultar-endereco',
    component: EnderecoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
