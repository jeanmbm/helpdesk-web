import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    CategoriaComponent
  ],
  exports: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class CategoriaModule { }
