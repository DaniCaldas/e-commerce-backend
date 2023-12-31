import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export const getItems = async (req:Request, res: Response) => {
    const items = await prisma.carrinho.findMany();
    return res.status(200).json(items);
}

export const postItem = async (req: Request, res: Response) => {
    const { url, produto, valor } = req.body;
    const items = await prisma.carrinho.create({    
        data:{
            url,
            produto,
            valor
        }
    })
    return res.status(201).json(items); 
}

export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.params;

    const item = await prisma.carrinho.delete({
        where:{
            id
        }
    })
    
    return res.status(200).json({msg:"item deleted", item});
}

export const DeleteAll = async (req: Request, res:Response) => {
    const productsDeleted = await prisma.carrinho.deleteMany({})

    return res.status(200).json(productsDeleted)
}