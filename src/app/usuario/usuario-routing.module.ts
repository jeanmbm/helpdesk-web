import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../guards/auth-guard';
import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioDetalheComponent} from './usuario-detalhe/usuario-detalhe.component';


const usuarioRouts: Routes = [
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},
  {path: 'usuario-detalhe', component: UsuarioDetalheComponent, canActivate: [AuthGuard]},
  {path: 'usuario-detalhe/:id', component: UsuarioDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(usuarioRouts)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
