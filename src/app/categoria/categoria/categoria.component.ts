import { Component, OnInit } from '@angular/core';
import {CategoriaDto} from '../../../model/categoria-dto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = [ 'id', 'nome', 'descricao'];

  categorias: CategoriaDto[] = [
    {id: 1, nome: 'Categoria 1', descricao: 'Lorem ipsum fringilla nisi congue netus, habitant fermentum aenean rutrum. '},
    {id: 2, nome: 'Categoria 2', descricao: 'Lorem ipsum inceptos accumsan purus praesent, fames ante a lectus. '},
    {id: 3, nome: 'Categoria 3', descricao: 'Lorem ipsum scelerisque pulvinar, luctus curabitur ligula conubia, suscipit tempor. '},
  ];

  dataSource = this.categorias;

  ngOnInit(): void {
  }

}
