import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../categoria.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {CategoriaDto} from '../../../model/categoria-dto';
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
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.component.html',
  styleUrls: ['./categoria-detalhe.component.css']
})
export class CategoriaDetalheComponent implements OnInit, MyErrorStateMatcher {

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formCategoria: FormGroup;
  categoria: CategoriaDto;
  matcher = new MyErrorStateMatcher();
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((param: Params) => {
        const id: number = +param.id;
        if (id) {
          this.categoriaService.buscarCategoriaPorId(id).subscribe(categoria => {
            this.categoria = categoria;
            this.formCategoria = this.formBuilder.group({
              id: [categoria.id],
              nome: [categoria.nome, [Validators.required, Validators.minLength(4)]],
              descricao: [categoria.descricao, [Validators.required]]
            });
          }, error => {console.error(error); });
        } else {
          this.categoria = {
            id: null,
            nome: '',
            descricao: ''
          };
          this.formCategoria = this.formBuilder.group({
            id: [this.categoria.id],
            nome: [this.categoria.nome, [Validators.required, Validators.minLength(4)]],
            descricao: [this.categoria.descricao, [Validators.required]]
          });
        }
      }
    );
  }

  onSubmit(): void{
    this.categoria = this.formCategoria.value;
    if (this.categoria.id == null) {
      this.categoriaService.salvarCategoria(this.categoria).subscribe( () => {
        this.categoriaService.showMassage('Categoria salvo com sucesso!!', false);
      });
      this.router.navigate(['/categoria']);
    } else {
      this.categoriaService.editarCategoria(this.categoria).subscribe( () => {
        this.categoriaService.showMassage('Categoria editado com sucesso!!', false);
      });
      this.router.navigate(['/categoria']);
    }
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formCategoria.controls;
  }

}
