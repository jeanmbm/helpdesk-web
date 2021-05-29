import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriaDto} from '../../model/categoria-dto';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private httpCliente: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  categrias: CategoriaDto[];

  listarCategorias(): Observable<CategoriaDto[]> {
    const url = `${environment.config.URL_API}/categoria/`;
    return this.httpCliente.get<CategoriaDto[]>(url).pipe(
      map((categorias) => categorias)
    );
  }

  salvarCategoria(categoria: CategoriaDto): Observable<CategoriaDto> {
    const url = `${environment.config.URL_API}/categoria/add`;
    return this.httpCliente.post<CategoriaDto>(url, categoria).pipe(
      map((categoriaSalvar) => categoria),
      catchError((e) => this.errorHandler(e))
    );
  }

  editarCategoria(categoria: CategoriaDto): Observable<CategoriaDto> {
    const url = `${environment.config.URL_API}/categoria/edit`;
    return this.httpCliente.post<CategoriaDto>(url, categoria).pipe(
      map((categoriaSalvar) => categoria),
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
