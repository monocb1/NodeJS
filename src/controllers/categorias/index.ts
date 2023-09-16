import { PrismaClient, Prisma } from '@prisma/client'
import { error } from 'console';
import { Request, Response } from 'express'

const prisma = new PrismaClient()

const getAllCategorias = async (req: Request, res: Response) => {
    
    try {
        const result = await prisma.categorias.findMany();
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const getCategoriasByid = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await prisma.categorias.findUnique({where: {id:parseInt(id)}})
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const createCategoria = async (req: Request, res: Response) => {

   console.log(req.body);

    try {
        const result = await prisma.categorias.create({data: req.body})
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const updateCategoria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const result = await prisma.categorias.update({where: {id:parseInt(id)}, data: body});
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}
const DeleteCategoria = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const result = await prisma.categorias.deleteMany({where: {id:parseInt(id)}});
        res.status(200).json(result);
    }
    catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

export {

    getAllCategorias,
    getCategoriasByid,
    createCategoria,
    updateCategoria,
    DeleteCategoria
}