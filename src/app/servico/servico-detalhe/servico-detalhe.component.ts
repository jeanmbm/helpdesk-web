import { Component, OnInit } from '@angular/core';
import {ServicoDto} from '../../../model/servico-dto';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ErrorStateMatcher} from '@angular/material/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ServicoService} from '../servico.service';
import {CategoriaDto} from '../../../model/categoria-dto';
import {CategoriaService} from '../../categoria/categoria.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-servico-detalhe',
  templateUrl: './servico-detalhe.component.html',
  styleUrls: ['./servico-detalhe.component.css']
})
export class ServicoDetalheComponent implements OnInit, MyErrorStateMatcher {

  constructor(
    private servicoService: ServicoService,
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formServico: FormGroup;
  servico: ServicoDto;
  matcher = new MyErrorStateMatcher();
  subscription: Subscription;
  categorias: CategoriaDto[];

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe((dados) => {
      this.categorias = dados;
    });

    this.subscription = this.route.params.subscribe((param: Params) => {
      const id: number = +param.id;
      if (id) {
        this.servicoService.buscarServicoPorId(id).subscribe(servico => {
          this.servico = servico;
          this.formServico = this.formBuilder.group({
            id: [servico.id],
            nome: [servico.nome, [Validators.required, Validators.minLength(4)]],
            descricao: [servico.descricao, [Validators.required, Validators.minLength(10)]],
            prioridade: [servico.prioridade, [Validators.required]],
            area: [servico.area, [Validators.required]],
            idCategoria: [servico.idCategoria, [Validators.required]]
          });
        }, error => {console.error(error); });
      } else {
        this.servico = {
          id: null,
          nome: '',
          descricao: '',
          prioridade: '',
          area: '',
          categoria: null,
          idCategoria: 0
        };
        this.formServico = this.formBuilder.group({
          id: [this.servico.id],
          nome: [this.servico.nome, [Validators.required, Validators.minLength(4)]],
          descricao: [this.servico.descricao, [Validators.required, Validators.minLength(10)]],
          prioridade: [this.servico.prioridade, [Validators.required]],
          area: [this.servico.area, [Validators.required]],
          idCategoria: [this.servico.idCategoria, [Validators.required]]
        });
      }
    });
  }

  onSubmit(): void {
    this.servico = this.formServico.value;
    if (this.servico.id == null) {
      this.servicoService.salvarServico(this.servico).subscribe( () => {
        this.servicoService.showMassage('Servico salvo com sucesso!!', false);
      });
      this.router.navigate(['/servico']);
    } else {
      this.servicoService.editarServico(this.servico).subscribe( () => {
        this.servicoService.showMassage('Servico editado com sucesso!!', false);
      });
      this.router.navigate(['/servico']);
    }
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formServico.controls;
  }

}
