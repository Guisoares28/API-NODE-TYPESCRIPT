import { Request, Response } from "express";
import { CidadeModel } from "../models/cidadeModel";
import { CidadeService } from "../services/cidadeService";

class CidadeController{
    
    static createCidade(req: Request, res: Response){
        const cidadeData: CidadeModel = req.body;
        if(cidadeData.nome === undefined){
            res.json({message:"Nome da cidade não informado!"})
        }
        const adicionado = CidadeService.addCidade(cidadeData);
        if(!adicionado){
            res.json({message:"Houve um erro ao adicionar a cidade!"})
        }
        res.json({message: `Cidade ${cidadeData.nome} adicionada com sucesso!`})
    }
}

export {CidadeController};