import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DepartamentoDto} from '../../model/departamento-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(
    private httpCliente: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  departamentos: DepartamentoDto[];

  listarDepartamentos(): Observable<DepartamentoDto[]> {
    const url = `${environment.config.URL_API}/departamento/`;
    return this.httpCliente.get<DepartamentoDto[]>(url).pipe(
      map((departamentos) => departamentos)
    );
  }

  salvarDepartamento(departamento: DepartamentoDto): Observable<DepartamentoDto> {
    const url = `${environment.config.URL_API}/departamento/add`;
    return this.httpCliente.post<DepartamentoDto>(url, departamento).pipe(
      map((departamentoSalvar) => departamento),
      catchError((e) => this.errorHandler(e))
    );
  }

  editarDepartamento(departamento: DepartamentoDto): Observable<DepartamentoDto> {
    const url = `${environment.config.URL_API}/departamento/edit`;
    return this.httpCliente.put<DepartamentoDto>(url, departamento).pipe(
      map((departamentoEditar) => departamento),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscarDepartamentoPorId(id: number): Observable<DepartamentoDto> {
    const url = `${environment.config.URL_API}/departamento/`;
    return this.httpCliente.get<DepartamentoDto>(url + id).pipe(
      map((departamento) => departamento),
      catchError( (e) => this.errorHandler(e))
    );
  }

  deletarDepartamento(id: number): void {
    const url = `${environment.config.URL_API}/departamento/delete/`;
    this.httpCliente.delete(url + id);
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
