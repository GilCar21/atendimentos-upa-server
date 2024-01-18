export interface AtendimentoInterface { 
  id: number;
  type: string;
  quantidade: number;
  producaoDiaId: number;
}

export interface ProducaoDiaInterface {
  id?: number;
  numeroDia: number;
  atendimentos: AtendimentoInterface[];
  producaoMesId: number;
}

export interface ProducaoMesInterface{
  id: number;
  mes: string;
  producaoDia?: ProducaoDiaInterface[]
}
export interface ProducaoRepository{

}