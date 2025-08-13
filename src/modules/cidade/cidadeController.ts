import { Request, Response } from "express";

class CidadeController{
    
    static async createCidade(req: Request, res: Response){
        res.json({message: "Criado com sucesso!"});
    }
}

export {CidadeController};