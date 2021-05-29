import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoComponent } from './departamento/departamento.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DepartamentoRoutingModule } from './departamento-routing.module';


@NgModule({
  declarations: [
    DepartamentoComponent,
    DepartamentoDetalheComponent
  ],
  exports: [
    DepartamentoComponent,
    DepartamentoDetalheComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    DepartamentoRoutingModule
  ]
})
export class DepartamentoModule { }
