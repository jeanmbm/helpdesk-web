import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EspecialidadeDto} from '../../model/especialidade-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  especialidade: EspecialidadeDto[];

  listarEspecialidades(): Observable<EspecialidadeDto[]> {
    const url = `${environment.config.URL_API}/especialidade/`;
    return this.httpClient.get<EspecialidadeDto[]>(url).pipe(
      map((especialidades) => especialidades)
    );
  }

  salvarEspecialidades(especialidade: EspecialidadeDto): Observable<EspecialidadeDto> {
    const url = `${environment.config.URL_API}/especialidade/add`;
    return this.httpClient.post<EspecialidadeDto>(url, especialidade).pipe(
      map((especialidadeSalvar) => especialidade),
      catchError((e) => this.errorHandler(e))
    );
  }

  editarEspecialidades(especialidade: EspecialidadeDto): Observable<EspecialidadeDto> {
    const url = `${environment.config.URL_API}/especialidade/edit/`;
    return this.httpClient.put<EspecialidadeDto>(url, especialidade).pipe(
      map((especialidadeEditar) => especialidade),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscarEspecialidadePorId(id: number): Observable<EspecialidadeDto> {
    const url = `${environment.config.URL_API}/especialidade/`;
    return this.httpClient.get<EspecialidadeDto>(url + id).pipe(
      map((especialidade) => especialidade),
      catchError((e) => this.errorHandler(e))
    );
  }

  deletarEspecialidade(id: number): void {
    const url = `${environment.config.URL_API}/especialidade/delete`;
    this.httpClient.delete<EspecialidadeDto>(url + id).pipe(
      map((especialidade) => especialidade),
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
