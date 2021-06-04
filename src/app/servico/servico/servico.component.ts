import { Component, OnInit } from '@angular/core';
import {ServicoService} from '../servico.service';
import {ServicoDto} from '../../../model/servico-dto';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {CategoriaDto} from '../../../model/categoria-dto';
import {CategoriaService} from '../../categoria/categoria.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  constructor(
    private servicoService: ServicoService,
    private categoriaService: CategoriaService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = [ 'id', 'nome', 'descricao', 'prioridade', 'area', 'categoria', 'acoes'];
  dataSource;
  servicos: ServicoDto[];
  servico: ServicoDto;
  categoria: CategoriaDto;

  ngOnInit(): void {
    this.servicoService.listarServicos().subscribe( dados => {
      this.servicos = dados;
      this.dataSource = this.servicos;
    });
  }

  salvar(): void {
    this.servicoService.salvarServico(this.servico).subscribe((dados) => {
      this.servicoService.showMassage('!! Serviço salvo com sucesso !!', false);
      this.servicos.push(dados);
      this.dataSource = this.servicos;
      location.reload();
    });
  }

  editar(servico: ServicoDto): void {
    this.router.navigate(['/servico-detalhe', servico.id]);
  }

  deletar(id: number): void {

  }

}
