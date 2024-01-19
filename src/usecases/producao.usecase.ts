import { ProducaoDia, ProducaoMes } from "@prisma/client";
import {  AtendimentoInterface, CreateAtendimentoInterface, CreateProducaoDiaInterface, CreateProducaoMesInterface, ProducaoRepository } from "../interfaces/producao.interface";
import { ProducaoRepositoryPrisma } from "../repositories/producao.repository";

export default class ProducaoUseCase {
    private producaoRepository: ProducaoRepository
    constructor(){
        this.producaoRepository = new ProducaoRepositoryPrisma()
    }

    async createMes({mes}: CreateProducaoMesInterface): Promise<ProducaoMes>{
        const data = await this.producaoRepository.createMes({mes});

        return data
    }
    async createDia({numeroDia,producaoMesId,atendimentos}: CreateProducaoDiaInterface): Promise<ProducaoDia>{
        const data = await this.producaoRepository.createDia({numeroDia,producaoMesId,atendimentos})

        return data
    }

    async createAtendimento({quantidade, tipoAtendimento, producaoDiaId}: CreateAtendimentoInterface): Promise<AtendimentoInterface>{
        const data = await this.producaoRepository.createAtendimento({quantidade, tipoAtendimento, producaoDiaId})

        return data
    }
}