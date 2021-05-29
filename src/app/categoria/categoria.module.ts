import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class CategoriaModule { }
