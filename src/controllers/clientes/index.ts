import { PrismaClient, Prisma } from '@prisma/client'
import { error } from 'console';
import { Request, Response } from 'express'

const prisma = new PrismaClient()

const getAllClientes = async (req: Request, res: Response) => {
    
    try {
        const result = await prisma.clientes.findMany();
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const getClientesByid = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await prisma.clientes.findUnique({where: {id:parseInt(id)}})
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const createClientes = async (req: Request, res: Response) => {

    try {
        const result = await prisma.clientes.create({data: req.body})
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const updateClientes = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const result = await prisma.clientes.update({where: {id:parseInt(id)}, data: body});
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}
const DeleteClientes = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await prisma.clientes.delete({
            where: {id:parseInt(id)}
        })
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

export {

    getAllClientes,
    getClientesByid,
    createClientes,
    updateClientes,
    DeleteClientes
}