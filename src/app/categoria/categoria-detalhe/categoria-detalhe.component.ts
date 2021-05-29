import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../categoria.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {CategoriaDto} from '../../../model/categoria-dto';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.component.html',
  styleUrls: ['./categoria-detalhe.component.css']
})
export class CategoriaDetalheComponent implements OnInit, MyErrorStateMatcher {

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder
  ) { }

  formCategoria: FormGroup;
  categoria: CategoriaDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formCategoria = this.formBuilder.group({
      // id: [],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      descricao: ['', [Validators.required]]
    });
  }

  onSubmit(): void{

  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formCategoria.controls;
  }

}
