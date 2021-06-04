import { Injectable } from '@angular/core';
import {UsuarioDto} from '../../model/usuario-dto';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import {EspecialidadeDto} from '../../model/especialidade-dto';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  usuario: UsuarioDto;

  listarUsuarios(): Observable<UsuarioDto[]> {
    const url = `${environment.config.URL_API}/usuario/`;
    return this.httpClient.get<UsuarioDto[]>(url).pipe(
      map((usuarios) => usuarios)
    );
  }

}
