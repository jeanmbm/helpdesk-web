import { Component, OnInit } from '@angular/core';
import {DepartamentoService} from '../departamento.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {DepartamentoDto} from '../../../model/departamento-dto';
import {ErrorStateMatcher} from '@angular/material/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-departamento-detalhe',
  templateUrl: './departamento-detalhe.component.html',
  styleUrls: ['./departamento-detalhe.component.css']
})
export class DepartamentoDetalheComponent implements OnInit, MyErrorStateMatcher {

  constructor(
    private departamentoService: DepartamentoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formDepartamento: FormGroup;
  departamento: DepartamentoDto;
  matcher = new MyErrorStateMatcher();
  subscription: Subscription;

  ngOnInit(): void {
     this.subscription = this.route.params.subscribe((param: Params) => {
        const id: number = +param.id;
        if (id) {
          this.departamentoService.buscarDepartamentoPorId(id).subscribe(departamento => {
            this.departamento = departamento;
            this.formDepartamento = this.formBuilder.group({
              id: [departamento.id],
              nome: [departamento.nome, [Validators.required, Validators.minLength(4)]],
              descricao: [departamento.descricao, [Validators.required]]
            });
          }, error => {console.error(error); });
        } else {
          this.departamento = {
            id: null,
            nome: '',
            descricao: ''
          };
          this.formDepartamento = this.formBuilder.group({
            id: [this.departamento.id],
            nome: [this.departamento.nome, [Validators.required, Validators.minLength(4)]],
            descricao: [this.departamento.descricao, [Validators.required]]
          });
        }
      }
    );
  }

  onSubmit(): void {
    this.departamento = this.formDepartamento.value;
    if (this.departamento.id == null) {
      this.departamentoService.salvarDepartamento(this.departamento).subscribe( () => {
        this.departamentoService.showMassage('Departamento salvo com sucesso!!', false);
      });
      this.router.navigate(['/departamento']);
    } else {
      this.departamentoService.editarDepartamento(this.departamento).subscribe( () => {
        this.departamentoService.showMassage('Departamento editado com sucesso!!', false);
      });
      this.router.navigate(['/departamento']);
    }
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formDepartamento.controls;
  }

}
