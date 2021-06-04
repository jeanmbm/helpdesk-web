import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoRoutingModule } from './servico-routing.module';
import { ServicoComponent } from './servico/servico.component';
import { ServicoDetalheComponent } from './servico-detalhe/servico-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ServicoComponent,
    ServicoDetalheComponent
  ],
  exports: [
    ServicoComponent,
    ServicoDetalheComponent
  ],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ]
})
export class ServicoModule { }
