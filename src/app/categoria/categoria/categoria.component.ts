import { Component, OnInit } from '@angular/core';
import {CategoriaDto} from '../../../model/categoria-dto';
import {CategoriaService} from '../categoria.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
    private location: Location
  ) { }

  displayedColumns: string[] = [ 'id', 'nome', 'descricao'];

  categoria: CategoriaDto = {
    id: 0,
    nome: 'Categoria Angular',
    descricao: 'Eros mattis magna donec amet eu posuere amet scelerisque dapibus dolor, lacinia arcu pellentesque vel tellus volutpat est elit mattis eget, elit ullamcorper posuere tempus aliquam tristique curabitur faucibus vulputate. '
  };

  //   {id: 2, nome: 'Categoria 2', descricao: 'Lorem ipsum inceptos accumsan purus praesent, fames ante a lectus. '},
  //   {id: 3, nome: 'Categoria 3', descricao: 'Lorem ipsum scelerisque pulvinar, luctus curabitur ligula conubia, suscipit tempor. '},
  // ];

  categorias: CategoriaDto[];

  dataSource;

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(dados => {
      this.categorias = dados;
      this.dataSource = this.categorias;
    });
  }

  salvar(): void {
    this.categoriaService.salvarCategoria(this.categoria).subscribe((dados) => {
      this.categoriaService.showMassage('!! Categoria salva com sucesso !!', false);
      this.categorias.push(dados);
      this.dataSource = this.categorias;
      location.reload();
    });
  }

}
