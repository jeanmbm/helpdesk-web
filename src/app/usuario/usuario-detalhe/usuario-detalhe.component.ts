import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../../../model/usuario-dto';
import { DepartamentoDto } from '../../../model/departamento-dto';
import { EspecialidadeDto } from '../../../model/especialidade-dto';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UsuarioService} from '../usuario.service';
import {Subscription} from 'rxjs';
import {EspecialidadeService} from '../../especialidade/especialidade.service';
import {DepartamentoService} from '../../departamento/departamento.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit, MyErrorStateMatcher {

  constructor(
    private usuarioService: UsuarioService,
    private departamentoService: DepartamentoService,
    private especialidadeService: EspecialidadeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formUsuario: FormGroup;
  usuario: UsuarioDto;
  matcher = new MyErrorStateMatcher();
  subscription: Subscription;
  departamentos: DepartamentoDto[];
  especialidades: EspecialidadeDto[];

  ngOnInit(): void {
    this.departamentoService.listarDepartamentos().subscribe((dados) => {
      this.departamentos = dados;
    });

    this.especialidadeService.listarEspecialidades().subscribe((dados) => {
      this.especialidades = dados;
    });

    this.subscription = this.route.params.subscribe((param: Params) => {
      const id: number = +param.id;
      if (id) {
        this.usuarioService.buscarUsuarioPorId(id).subscribe(usuario => {
          this.usuario = usuario;
          this.formUsuario = this.formBuilder.group({
            id: [usuario.id],
            nome: [usuario.nome, [Validators.required, Validators.minLength(4)]],
            telefone: [usuario.telefone, [Validators.required, Validators.minLength(11)]],
            cpf: [usuario.cpf, [Validators.required, Validators.minLength(11)]],
            email: [usuario.email, [Validators.required, Validators.email]],
            senha: [usuario.senha, [Validators.required, Validators.minLength(6)]],
            idDepartamento: [usuario.idDepartamento, [Validators.required]],
            isTecnico: [usuario.isTecnco, [Validators.required]],
            idEspecialidade: [usuario.idEspecialidade]
          });
        }, error => {console.error(error); });
      } else {
        this.usuario = {
          id: null,
          nome: '',
          telefone: '',
          cpf: '',
          email: '',
          senha: '',
          departamento: null,
          idDepartamento: 0,
          isTecnco: false,
          especialidade: null,
          idEspecialidade: 0
        };
        this.formUsuario = this.formBuilder.group({
          id: [this.usuario.id],
          nome: [this.usuario.nome, [Validators.required, Validators.minLength(4)]],
          telefone: [this.usuario.telefone, [Validators.required, Validators.minLength(11)]],
          cpf: [this.usuario.cpf, [Validators.required, Validators.minLength(11)]],
          email: [this.usuario.email, [Validators.required, Validators.email]],
          senha: [this.usuario.senha, [Validators.required, Validators.minLength(6)]],
          idDepartamento: [this.usuario.idDepartamento, [Validators.required]],
          isTecnico: [this.usuario.isTecnco, [Validators.required]],
          idEspecialidade: [this.usuario.idEspecialidade]
        });
      }
    });
  }

  onSubmit(): void {
    this.usuario = this.formUsuario.value;
    if (this.usuario.id == null) {
      this.usuarioService.salvarUsuario(this.usuario).subscribe( () => {
        this.usuarioService.showMassage('Usuario salvo com sucesso!!', false);
      });
      this.router.navigate(['/usuario']);
    } else {
      this.usuarioService.editarUsuario(this.usuario).subscribe( () => {
        this.usuarioService.showMassage('Usuario editado com sucesso!!', false);
      });
      this.router.navigate(['/usuario']);
    }
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formUsuario.controls;
  }

}
