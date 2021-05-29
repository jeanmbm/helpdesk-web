import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {CategoriaModule} from './categoria/categoria.module';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DepartamentoModule} from './departamento/departamento.module';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    CategoriaModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    DepartamentoModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
