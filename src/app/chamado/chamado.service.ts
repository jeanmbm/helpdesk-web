import { Injectable } from '@angular/core';
import { ChamadoDto } from '../../model/chamado-dto';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  chamado: ChamadoDto;

  listarChamado(): Observable<ChamadoDto[]> {
    const url = `${environment.config.URL_API}/chamado/`;
    return this.httpClient.get<ChamadoDto[]>(url).pipe(
      map((chamados) => chamados)
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
