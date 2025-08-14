import { Request, Response } from "express";
import { CidadeEntity } from "../../config/database/entity/cidadeEntity";
import { adicionarCidade } from "../../config/database/dao/cidadeDAO";

class CidadeController{
    
    static async createCidade(req: Request, res: Response){
        const cidade = new CidadeEntity();
        cidade.nome = req.body.nome;
        cidade.estado = req.body.estado;

        const result = await adicionarCidade(cidade);

        if("error" in result){
            return  res.status(400).json({error:result.error});
        }

        res.status(200).json({message: "Criado  com sucesso!"})    }
}

export { CidadeController  };