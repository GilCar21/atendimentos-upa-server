import { FastifyInstance } from "fastify";
import ProducaoUseCase from "../usecases/producao.usecase";
import {  CreateAtendimentoInterface, CreateProducaoDiaInterface, CreateProducaoMesInterface } from "../interfaces/producao.interface";


export async function producaoRoutes(fastify: FastifyInstance){
    const producaoUseCase = new ProducaoUseCase()
    
    fastify.post<{Body: CreateProducaoMesInterface}>('/mes',async (req, reply)=>{
        const { mes } = req.body
        try{
            const data = await producaoUseCase.createMes({
                mes
            })
            reply.send(data);
        }catch(err){
            reply.send(err)
        }
    })

    fastify.post<{Body: CreateProducaoDiaInterface}>('/mes/dia',async (req, reply)=>{
        const { numeroDia,producaoMesId,atendimentos } = req.body
        try{
            const data = await producaoUseCase.createDia({
                numeroDia,
                producaoMesId,
                atendimentos
            })
            reply.send(data);
        }catch(err){
            reply.send(err)
        }
    })

    fastify.post<{Body: CreateAtendimentoInterface}>('/mes/dia/atendimento',async (req, reply)=>{
        const { quantidade, type, producaoDiaId } = req.body
        try{
            const data = await producaoUseCase.createAtendimento({
                quantidade, type, producaoDiaId
            })
            reply.send(data);
        }catch(err){
            reply.send(err)
        }
    })



    
}