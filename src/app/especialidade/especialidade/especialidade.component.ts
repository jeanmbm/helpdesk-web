import { Component, OnInit } from '@angular/core';
import {EspecialidadeService} from '../especialidade.service';
import {EspecialidadeDto} from '../../../model/especialidade-dto';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-especialidade',
  templateUrl: './especialidade.component.html',
  styleUrls: ['./especialidade.component.css']
})

export class EspecialidadeComponent implements OnInit {

  constructor(
    private especialidadeService: EspecialidadeService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = [ 'id', 'nome', 'descricao', 'area', 'acoes'];

  especialidades: EspecialidadeDto[];
  especialidade: EspecialidadeDto;

  dataSource;

  ngOnInit(): void {
    this.especialidadeService.listarEspecialidades().subscribe(dados => {
      this.especialidades = dados;
      this.dataSource = this.especialidades;
    });
  }

  salvar(): void {
    this.especialidadeService.salvarEspecialidades(this.especialidade).subscribe((dados) => {
      this.especialidadeService.showMassage('!! Especialidade salva com sucesso !!', false);
      this.especialidades.push(dados);
      this.dataSource = this.especialidades;
      location.reload();
    });
  }

  editar(especialidade: EspecialidadeDto): void {
    this.router.navigate(['/especialidade-detalhe', especialidade.id]);
  }

  deletar(id: number): void {
    this.especialidadeService.deletarEspecialidade(id);
  }

}
