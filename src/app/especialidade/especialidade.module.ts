import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadeRoutingModule } from './especialidade-routing.module';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { EspecialidadeDetalheComponent } from './especialidade-detalhe/especialidade-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    EspecialidadeComponent,
    EspecialidadeDetalheComponent
  ],
  exports: [
    EspecialidadeComponent,
    EspecialidadeDetalheComponent
  ],
  imports: [
    CommonModule,
    EspecialidadeRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class EspecialidadeModule { }
