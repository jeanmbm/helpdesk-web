import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartamentoDetalheComponent} from './departamento/departamento-detalhe/departamento-detalhe.component';


const departamentoRouts: Routes = [
  {path: 'home', component: DepartamentoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(departamentoRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
