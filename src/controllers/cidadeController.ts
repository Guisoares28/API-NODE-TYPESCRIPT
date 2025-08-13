import { Request, Response } from "express";
import { CidadeService } from "../services/cidadeService";
import { Cidade, CidadeSchema } from "../dtos/cidadeDTO";

class CidadeController{
    
    static async createCidade(req: Request, res: Response){
        const data: Cidade = req.body;
        const result = await CidadeSchema.validarSchema(data);
        if("sucesso" in result){
            res.json({message:`Cidade ${data.nome} adicionada com sucesso!`})
        }
        
        res.send(result);
    }
}

export {CidadeController};