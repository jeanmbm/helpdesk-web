import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../guards/auth-guard';
import {EspecialidadeComponent} from './especialidade/especialidade.component';
import {EspecialidadeDetalheComponent} from './especialidade-detalhe/especialidade-detalhe.component';


const especialidadeRouts: Routes = [
  {path: 'especialidade', component: EspecialidadeComponent, canActivate: [AuthGuard]},
  {path: 'especialidade-detalhe', component: EspecialidadeDetalheComponent, canActivate: [AuthGuard]},
  {path: 'especialidade-detalhe/:id', component: EspecialidadeDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(especialidadeRouts)],
  exports: [RouterModule]
})
export class EspecialidadeRoutingModule { }
