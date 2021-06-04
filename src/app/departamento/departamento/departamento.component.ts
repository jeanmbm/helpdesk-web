import { Component, OnInit } from '@angular/core';
import {DepartamentoDto} from '../../../model/departamento-dto';
import {DepartamentoService} from '../departamento.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})

export class DepartamentoComponent implements OnInit {

  constructor(
    private departamentoService: DepartamentoService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = [ 'id', 'nome', 'descricao', 'acoes'];

  departamentos: DepartamentoDto[];

  departamento: DepartamentoDto = {
    id: 1,
    nome: 'Departamento 1',
    descricao: 'Uma Descrição Qualquer.'
  };

  dataSource;

  ngOnInit(): void {
    this.departamentoService.listarDepartamentos().subscribe( dados => {
      this.departamentos = dados;
      this.dataSource = this.departamentos;
    });
  }

  salvar(): void {
    this.departamentoService.salvarDepartamento(this.departamento).subscribe((dados) => {
      this.departamentoService.showMassage('!! Departamento salvo com sucesso !!', false);
      this.departamentos.push(dados);
      this.dataSource = this.departamentos;
      location.reload();
    });
  }

  editar(departamento: DepartamentoDto): void {
    this.router.navigate(['/departamento-detalhe', departamento.id]);
  }

  deletar(departamento: DepartamentoDto): void {
    this.departamentoService.deletarDepartamento(departamento.id);
  }

}
