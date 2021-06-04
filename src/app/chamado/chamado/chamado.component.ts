import { Component, OnInit } from '@angular/core';
import { ChamadoDto } from '../../../model/chamado-dto';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {ChamadoService} from '../chamado.service';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.css']
})
export class ChamadoComponent implements OnInit {

  constructor(
    private chamadoService: ChamadoService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = [ 'id', 'usuario', 'servico', 'mensagem', 'status', 'dataAbertura', 'prazoSolucao', 'dataSolucao', 'acoes'];

  chamado: ChamadoDto;
  chamados: ChamadoDto[];

  dataSource;

  ngOnInit(): void {
    this.chamadoService.listarChamado().subscribe(dados => {
      this.chamados = dados;
      this.dataSource = this.chamados;
    });
  }

  salvar(): void {

  }

  editar(chamado: ChamadoDto): void {

  }

  deletar(id: number): void {

  }

}
