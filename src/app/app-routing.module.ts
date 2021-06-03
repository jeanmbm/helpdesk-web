import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CategoriaComponent} from './categoria/categoria/categoria.component';
import {AuthGuard} from './guards/auth-guard';


const departamentoRouts: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: CategoriaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(departamentoRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
