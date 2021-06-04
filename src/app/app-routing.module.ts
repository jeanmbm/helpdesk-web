import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth-guard';
import {UsuarioComponent} from './usuario/usuario/usuario.component';


const departamentoRouts: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: UsuarioComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(departamentoRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
