import {ServicoDto} from './servico-dto';
import {UsuarioDto} from './usuario-dto';

export class ChamadoDto {
  id: number;
  dataAbertura: Date;
  prazoSolucao: Date;
  dataSolucao: Date;
  status: ;
  mensagem: string;
  usuario: UsuarioDto;
  servico: ServicoDto;
}
