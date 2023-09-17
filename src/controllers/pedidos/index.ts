import { PrismaClient, Prisma } from '@prisma/client'
import { error } from 'console';
import { Request, Response } from 'express'

const prisma = new PrismaClient()

const getAllPedidos = async (req: Request, res: Response) => {
    
    try {
        const result = await prisma.pedidos.findMany({include: {cliente: true, items:{include: {producto: true}}}});
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const getPedidosByid = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await prisma.pedidos.findUnique({where: {id:parseInt(id)},include: {cliente: true, items:{include: {producto: true}}}})
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const createPedidos = async (req: Request, res: Response) => {

  
    try {
        const result = await prisma.pedidos.create({data: req.body})
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const updatePedidos = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const result = await prisma.pedidos.update({where: {id:parseInt(id)}, data: body});
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}
const DeletePedidos = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await prisma.pedidos.delete({
            where: {id:parseInt(id)}
        })
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

export {

    getAllPedidos,
    getPedidosByid,
    createPedidos,
    updatePedidos,
    DeletePedidos
}