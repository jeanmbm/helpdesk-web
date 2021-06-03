import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CategoriaRoutingModule } from './categoria-routing.module';

@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriaDetalheComponent
  ],
  exports: [
    CategoriaComponent,
    CategoriaDetalheComponent
  ],
    imports: [
      CommonModule,
      MatTableModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      CategoriaRoutingModule
    ]
})
export class CategoriaModule { }
