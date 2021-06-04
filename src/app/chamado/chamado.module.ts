import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadoRoutingModule } from './chamado-routing.module';
import { ChamadoComponent } from './chamado/chamado.component';
import { ChamadoDetalheComponent } from './chamado-detalhe/chamado-detalhe.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {NgxMaskModule} from 'ngx-mask';



@NgModule({
  declarations: [
    ChamadoComponent,
    ChamadoDetalheComponent
  ],
    imports: [
        CommonModule,
        ChamadoRoutingModule,
        MatButtonModule,
        MatTableModule,
        NgxMaskModule
    ]
})
export class ChamadoModule { }
