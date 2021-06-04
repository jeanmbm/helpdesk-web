import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { UsuarioRoutingModule } from './usuario-routing.module';
import {NgxMaskModule} from 'ngx-mask';



@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioDetalheComponent
  ],
  exports: [
    UsuarioComponent,
    UsuarioDetalheComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    UsuarioRoutingModule,
    NgxMaskModule
  ]
})
export class UsuarioModule { }
