import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../guards/auth-guard';
import {ChamadoComponent} from './chamado/chamado.component';
import {ChamadoDetalheComponent} from './chamado-detalhe/chamado-detalhe.component';


const chamadoRouts: Routes = [
  {path: 'chamado', component: ChamadoComponent, canActivate: [AuthGuard]},
  {path: 'chamado-detalhe', component: ChamadoDetalheComponent, canActivate: [AuthGuard]},
  {path: 'chamado-detalhe/:id', component: ChamadoDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(chamadoRouts)],
  exports: [RouterModule]
})
export class ChamadoRoutingModule { }
