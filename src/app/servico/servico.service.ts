import { Injectable } from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {ServicoDto} from '../../model/servico-dto';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  servicos: ServicoDto[];

  listarServicos(): Observable<ServicoDto[]> {
    const url = `${environment.config.URL_API}/servico/`;
    return this.httpClient.get<ServicoDto[]>(url).pipe(
      map((servicos) => servicos)
    );
  }

  salvarServico(servico: ServicoDto): Observable<ServicoDto> {
    const url = `${environment.config.URL_API}/servico/add`;
    return this.httpClient.post<ServicoDto>(url, servico).pipe(
      map((servicoSalvar) => servico),
      catchError((e) => this.errorHandler(e))
    );
  }

  editarServico(servico: ServicoDto): Observable<ServicoDto> {
    const url = `${environment.config.URL_API}/servico/edit`;
    return this.httpClient.put<ServicoDto>(url, servico).pipe(
      map((servicoEditar) => servico),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscarServicoPorId(id: number): Observable<ServicoDto> {
    const url = `${environment.config.URL_API}/servico/`;
    return this.httpClient.get<ServicoDto>(url + id).pipe(
      map((servico) => servico),
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
