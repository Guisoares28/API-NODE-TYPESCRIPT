import { NextFunction, Request, RequestHandler, Response } from "express";
import { Validador } from "../utils.ts/validarDados";
import { Cidade } from "../dtos/cidadeDTO";

export class CidadeMiddleware{

    static validarDadosMiddleware(): RequestHandler {
        return async (req: Request, res: Response, next: NextFunction) => {
            const data:Cidade = req.body;
            const resultValidacao = await Validador.validarSchema(data);
            
            if(resultValidacao.sucesso === true){
                return next();
            }
            res.status(400).json(resultValidacao);
        }
    }
}