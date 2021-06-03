import { Component, OnInit } from '@angular/core';
import {EspecialidadeService} from '../especialidade.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EspecialidadeDto} from '../../../model/especialidade-dto';
import {Subscription} from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-especialidade-detalhe',
  templateUrl: './especialidade-detalhe.component.html',
  styleUrls: ['./especialidade-detalhe.component.css']
})
export class EspecialidadeDetalheComponent implements OnInit, MyErrorStateMatcher {

  constructor(
    private especialidadeService: EspecialidadeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formEspecialidade: FormGroup;
  especialidade: EspecialidadeDto;
  matcher = new MyErrorStateMatcher();
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((param: Params) => {
        const id: number = +param.id;
        if (id) {
          this.especialidadeService.buscarEspecialidadePorId(id).subscribe(especialidade => {
            this.especialidade = especialidade;
            this.formEspecialidade = this.formBuilder.group({
              id: [especialidade.id],
              nome: [especialidade.nome, [Validators.required, Validators.minLength(4)]],
              descricao: [especialidade.descricao, [Validators.required]],
              area: [this.especialidade.area, [Validators.required]]
            });
          }, error => {console.error(error); });
        } else {
          this.especialidade = {
            id: null,
            nome: '',
            descricao: '',
            area: ''
          };
          this.formEspecialidade = this.formBuilder.group({
            id: [this.especialidade.id],
            nome: [this.especialidade.nome, [Validators.required, Validators.minLength(4)]],
            descricao: [this.especialidade.descricao, [Validators.required]],
            area: [this.especialidade.area, [Validators.required]]
          });
        }
      }
    );
  }

  onSubmit(): void {
    this.especialidade = this.formEspecialidade.value;
    if (this.especialidade.id == null) {
      this.especialidadeService.salvarEspecialidades(this.especialidade).subscribe( () => {
        this.especialidadeService.showMassage('Especialidade salva com sucesso!!', false);
      });
      this.router.navigate(['/especialidade']);
    } else {
      this.especialidadeService.editarEspecialidades(this.especialidade).subscribe( () => {
        this.especialidadeService.showMassage('Especialidade editada com sucesso!!', false);
      });
      this.router.navigate(['/especialidade']);
    }
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formEspecialidade.controls;
  }

}
