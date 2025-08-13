import { cidadeDB } from "../config/database";
import { Cidade } from "../dtos/cidadeDTO";
import { CidadeModel } from "../models/cidadeModel";

class CidadeService{
    static addCidade(cidade: Cidade): boolean{
        try {
            cidadeDB.push(cidade);
            return true;
        } catch (error) {
            return false;
        }
    }
}

export{ CidadeService };
