import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../guards/auth-guard';
import {ServicoComponent} from './servico/servico.component';
import {ServicoDetalheComponent} from './servico-detalhe/servico-detalhe.component';


const servicoRouts: Routes = [
  {path: 'servico', component: ServicoComponent, canActivate: [AuthGuard]},
  {path: 'servico-detalhe', component: ServicoDetalheComponent, canActivate: [AuthGuard]},
  {path: 'servico-detalhe/:id', component: ServicoDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(servicoRouts)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
