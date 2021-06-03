import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartamentoComponent} from './departamento/departamento.component';
import {DepartamentoDetalheComponent} from './departamento-detalhe/departamento-detalhe.component';
import {AuthGuard} from '../guards/auth-guard';


const departamentoRouts: Routes = [
  {path: 'departamento', component: DepartamentoComponent, canActivate: [AuthGuard]},
  {path: 'departamento-detalhe', component: DepartamentoDetalheComponent, canActivate: [AuthGuard]},
  {path: 'departamento-detalhe/:id', component: DepartamentoDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(departamentoRouts)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
