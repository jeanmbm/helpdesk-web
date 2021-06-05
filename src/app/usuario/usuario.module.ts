import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { UsuarioRoutingModule } from './usuario-routing.module';
import {NgxMaskModule} from 'ngx-mask';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



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
        NgxMaskModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule
    ]
})
export class UsuarioModule { }
