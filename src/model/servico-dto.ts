import {CategoriaDto} from './categoria-dto';

export class ServicoDto {
  id: number;
  nome: string;
  descricao: string;
  prioridade: string;
  area: string;
  categoria: CategoriaDto;
  idCategoria: number;
}
