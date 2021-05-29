import { Component, OnInit } from '@angular/core';
import {DepartamentoDto} from '../../../model/departamento-dto';
import {DepartamentoService} from '../departamento.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})

export class DepartamentoComponent implements OnInit {

  constructor(
    private departamentoService: DepartamentoService,
    private location: Location
  ) { }

  displayedColumns: string[] = [ 'id', 'nome', 'descricao'];

  departamentos: DepartamentoDto[];

  departamento: DepartamentoDto = {
    id: 1,
    nome: 'Departamento 1',
    descricao: 'Uma Descrição Qualquer.'
  };

  // departamentos: DepartamentoDto[] = [
  //   {id: 1, nome: 'Departamento 1', descricao: 'Uma Descrição Qualquer.'},
  //   {id: 2, nome: 'Departamento 2', descricao: 'Lorem ipsum inceptos accumsan purus praesent, fames ante a lectus.'},
  //   {id: 3, nome: 'Departamento 3', descricao: 'Lorem ipsum sceleri.'}
  // ];

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

}
