import {DepartamentoDto} from './departamento-dto';
import {EspecialidadeDto} from './especialidade-dto';

export class UsuarioDto {
  id: number;
  nome: string;
  telefone: string;
  cpf: string;
  email: string;
  senha: string;
  departamento: DepartamentoDto;
  idDepartamento: number;
  isTecnco: boolean;
  especialidade: EspecialidadeDto;
  idEspecialidade: number;
}
