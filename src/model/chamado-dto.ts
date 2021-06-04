import {ServicoDto} from './servico-dto';
import {UsuarioDto} from './usuario-dto';

export class ChamadoDto {
  id: number;
  dataAbertura: Date;
  prazoSolucao: Date;
  dataSolucao: Date;
  status: string;
  mensagem: string;
  usuario: UsuarioDto;
  servico: ServicoDto;
}
