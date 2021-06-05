import { Component, OnInit } from '@angular/core';
import {UsuarioDto} from '../../../model/usuario-dto';
import {DepartamentoService} from '../../departamento/departamento.service';
import {EspecialidadeService} from '../../especialidade/especialidade.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private departamentoService: DepartamentoService,
    private especialidadeService: EspecialidadeService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = [ 'id', 'nome', 'telefone', 'cpf', 'email', 'senha', 'departamento', 'tecnico', 'especialidade', 'acoes'];

  usuario: UsuarioDto;
  usuarios: UsuarioDto[];

  dataSource;

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe(dados => {
      this.usuarios = dados;
      this.dataSource = this.usuarios;
    });
  }

  salvar(): void{
    this.departamentoService.buscarDepartamentoPorId(this.usuario.idDepartamento).subscribe(dados => {
      this.usuario.departamento = dados;
    });
    if (this.usuario.isTecnco) {
      this.especialidadeService.buscarEspecialidadePorId(this.usuario.idEspecialidade).subscribe(dados => {
        this.usuario.especialidade = dados;
      });
    }
    this.usuarioService.salvarUsuario(this.usuario).subscribe((dados) => {
      this.usuarioService.showMassage('!! Serviço salvo com sucesso !!', false);
      this.usuarios.push(dados);
      this.dataSource = this.usuarios;
      location.reload();
    });
  }

  editar(usuario: UsuarioDto): void{
    this.router.navigate(['/usuario-detalhe', usuario.id]);
  }

  deletar(id: number): void{

  }

}
