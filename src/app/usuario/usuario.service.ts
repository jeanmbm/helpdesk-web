import { Injectable } from '@angular/core';
import {UsuarioDto} from '../../model/usuario-dto';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EMPTY, Observable} from 'rxjs';
import {EspecialidadeDto} from '../../model/especialidade-dto';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {ServicoDto} from '../../model/servico-dto';

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

  salvarUsuario(usuario: UsuarioDto): Observable<UsuarioDto> {
    const url = `${environment.config.URL_API}/usuario/add`;
    return this.httpClient.post<UsuarioDto>(url, usuario).pipe(
      map((usuarioSalvar) => usuario),
      catchError((e) => this.errorHandler(e))
    );
  }

  editarUsuario(usuario: UsuarioDto): Observable<UsuarioDto> {
    const url = `${environment.config.URL_API}/usuario/edit`;
    return this.httpClient.put<UsuarioDto>(url, usuario).pipe(
      map((usuarioEditar) => usuario),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscarUsuarioPorId(id: number): Observable<UsuarioDto> {
    const url = `${environment.config.URL_API}/usuario/`;
    return this.httpClient.get<UsuarioDto>(url + id).pipe(
      map((usuario) => usuario),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMassage('Ocorreu um erro', true);
    return EMPTY;
  }

  showMassage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

}
