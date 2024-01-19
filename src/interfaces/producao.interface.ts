export interface AtendimentoInterface { 
  id: number;
  tipoAtendimento: string | null;
  quantidade: number;
  producaoDiaId: number | null;
}
export interface CreateAtendimentoInterface { 
  tipoAtendimento: string;
  quantidade: number;
  producaoDiaId: number | null;
}

export interface TipoAtendimentoInterface {
  type: string;
  atendimentos?: AtendimentoInterface[]
}


export interface ProducaoDiaInterface {
  id: number;
  numeroDia: number;
  producaoMesId: number | null;
  atendimentos?: AtendimentoInterface[];
}
export interface CreateProducaoDiaInterface {
  numeroDia: number;
  producaoMesId: number | null;
  atendimentos?: AtendimentoInterface[];
}

export interface ProducaoMesInterface{
  id: number;
  mes: string;
  producaoDia?: ProducaoDiaInterface[]
}
export interface CreateProducaoMesInterface{
  mes: string;
  producaoDia?: ProducaoDiaInterface[]
}

export interface ProducaoRepository{
  createMes(data: CreateProducaoMesInterface): Promise<ProducaoMesInterface>
  createDia(data: CreateProducaoDiaInterface): Promise<ProducaoDiaInterface>
  createTipoAtendimento(data: TipoAtendimentoInterface): Promise<TipoAtendimentoInterface>
  createAtendimento(data: CreateAtendimentoInterface): Promise<AtendimentoInterface>
}