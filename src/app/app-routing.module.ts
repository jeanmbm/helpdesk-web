import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth-guard';
import {ServicoComponent} from './servico/servico/servico.component';


const departamentoRouts: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: ServicoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(departamentoRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
