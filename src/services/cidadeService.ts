import { cidadeDB } from "../config/database";
import { CidadeModel } from "../models/cidadeModel";

class CidadeService{
    static addCidade(cidade: CidadeModel): boolean{
        try {
            cidadeDB.push(cidade);
            return true;
        } catch (error) {
            return false;
        }
    }
}

export{ CidadeService };
