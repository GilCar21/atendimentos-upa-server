import { prisma } from "../database/prisma-client";
import {  AtendimentoInterface, CreateAtendimentoInterface, CreateProducaoDiaInterface, CreateProducaoMesInterface, ProducaoDiaInterface, ProducaoMesInterface, ProducaoRepository } from "../interfaces/producao.interface";

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

  async createAtendimento(data: CreateAtendimentoInterface): Promise<AtendimentoInterface>{
    const result = await prisma.atendimentos.create({
      data:{
        quantidade: data.quantidade,
        type: data.type,
        producaoDiaId: data.producaoDiaId
      }
    })
    return result;
  }
  
}

export {ProducaoRepositoryPrisma}