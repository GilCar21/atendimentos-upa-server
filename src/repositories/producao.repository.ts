import { prisma } from "../database/prisma-client";
import {  AtendimentoInterface, CreateAtendimentoInterface, CreateProducaoDiaInterface, CreateProducaoMesInterface, ProducaoDiaInterface, ProducaoMesInterface, ProducaoRepository, TipoAtendimentoInterface } from "../interfaces/producao.interface";

class ProducaoRepositoryPrisma implements ProducaoRepository{
  
  async createMes(data: CreateProducaoMesInterface): Promise<ProducaoMesInterface> {
    const result = await prisma.producaoMes.create({
      data: {
       mes: data.mes
      }
    })
    return result;
  }

  async createDia(data:CreateProducaoDiaInterface): Promise<ProducaoDiaInterface>{
    const result = await prisma.producaoDia.create({
      data:{
        numeroDia: data.numeroDia,
        producaoMesId: data.producaoMesId
      }
    })
    return result;
  }

  async createTipoAtendimento(data: TipoAtendimentoInterface): Promise<TipoAtendimentoInterface>{
    const result = await prisma.tipoAtendimento.create({
      data: {
        type: data.type
      }
    })
    return result;
  }

  async createAtendimento(data: CreateAtendimentoInterface): Promise<AtendimentoInterface>{

    const result = await prisma.atendimentos.create({
      data:{
        quantidade: data.quantidade,
        tipoAtendimento: data.tipoAtendimento,
        producaoDiaId: data.producaoDiaId
      }
    })
    return result;
  }
  
}

export {ProducaoRepositoryPrisma}