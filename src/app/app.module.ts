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
import {LoginModule} from './login/login.module';
import {EspecialidadeModule} from './especialidade/especialidade.module';
import {ServicoModule} from './servico/servico.module';
import {UsuarioModule} from './usuario/usuario.module';
import {ChamadoModule} from './chamado/chamado.module';

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
    AppRoutingModule,
    LoginModule,
    EspecialidadeModule,
    ServicoModule,
    UsuarioModule,
    ChamadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
