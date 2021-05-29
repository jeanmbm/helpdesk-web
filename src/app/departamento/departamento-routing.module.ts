import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartamentoComponent} from './departamento/departamento.component';
import {DepartamentoDetalheComponent} from './departamento-detalhe/departamento-detalhe.component';

const departamentoRouts: Routes = [
  {path: 'departamento', component: DepartamentoComponent},
  {path: 'departamento-detalhe', component: DepartamentoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(departamentoRouts)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
