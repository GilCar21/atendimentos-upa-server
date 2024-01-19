export interface AtendimentoInterface { 
  id: number;
  type: string;
  quantidade: number;
  producaoDiaId: number | null;
}
export interface CreateAtendimentoInterface { 
  type: string;
  quantidade: number;
  producaoDiaId: number | null;
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
  createAtendimento(data: CreateAtendimentoInterface): Promise<AtendimentoInterface>
}