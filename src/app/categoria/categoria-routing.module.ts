import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../guards/auth-guard';
import {CategoriaComponent} from './categoria/categoria.component';
import {CategoriaDetalheComponent} from './categoria-detalhe/categoria-detalhe.component';

const categoriaRouts: Routes = [
  {path: 'categoria', component: CategoriaComponent, canActivate: [AuthGuard]},
  {path: 'categoria-detalhe', component: CategoriaDetalheComponent, canActivate: [AuthGuard]},
  {path: 'categoria-detalhe/:id', component: CategoriaDetalheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(categoriaRouts)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
