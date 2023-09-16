import { PrismaClient, Prisma } from '@prisma/client'
import { error } from 'console';
import { Request, Response } from 'express'

const prisma = new PrismaClient()

const getAllProductos = async (req: Request, res: Response) => {
    
    try {

        const result = await prisma.productos.findMany( { include: {categoria: true}});
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const getProductosByid = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await prisma.productos.findUnique({where: {id:parseInt(id)}, include: {categoria: true}})
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const createProductos = async (req: Request, res: Response) => {

    console.log(req.body);
    try {
        const result = await prisma.productos.create({data: req.body})
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

const updateProductos = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const result = await prisma.productos.update({where: {id:parseInt(id)}, data: body});
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}
const DeleteProductos = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await prisma.productos.delete({
            where: {id:parseInt(id)}
        })
        res.status(200).json(result);

    } catch (error){
        console.log("se presento un error", error);
        res.status(500).json(error);
    }
    
}

export {

    getAllProductos,
    getProductosByid,
    createProductos,
    updateProductos,
    DeleteProductos
}