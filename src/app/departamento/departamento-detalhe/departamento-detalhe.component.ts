import { Component, OnInit } from '@angular/core';
import {DepartamentoService} from '../departamento.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {DepartamentoDto} from '../../../model/departamento-dto';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';

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
    private router: Router
  ) { }

  formDepartamento: FormGroup;
  departamento: DepartamentoDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
     this.formDepartamento = this.formBuilder.group({
       // id: [''],
       nome: ['', [Validators.required, Validators.minLength(4)]],
       descricao: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.departamento = this.formDepartamento.value;
    this.departamentoService.salvarDepartamento(this.departamento).subscribe( () => {
      this.departamentoService.showMassage('Departamento salvo com sucesso!!', false);
    });
    this.router.navigate(['/departamento']);
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formDepartamento.controls;
  }

}
