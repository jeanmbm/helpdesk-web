import { Component, OnInit } from '@angular/core';
import {UsuarioDto} from '../../../model/usuario-dto';
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

  }

  editar(usuario: UsuarioDto): void{

  }

  deletar(id: number): void{

  }

}
