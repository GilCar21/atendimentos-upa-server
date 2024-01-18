import { prisma } from "../database/prisma-client";
import { ProducaoMesInterface, ProducaoRepository } from "../interfaces/producao.interface";

class ProducaoRepositoryPrisma implements ProducaoRepository{
  async create(data: ProducaoMesInterface): Promise<ProducaoMesInterface> {
    const result = await prisma.producaoMes.create({
      data: {
        mes: data.mes,
        producaoDia: data.producaoDia
      }
    })
    return result;
  }
  
}

export {ProducaoRepository}