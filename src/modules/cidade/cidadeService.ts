import { cidadeDB } from "../../config/database";
import { Cidade } from "./cidadeSchema";

export class CidadeService{
    static addCidade(cidade: Cidade): boolean{
        try {
            cidadeDB.push(cidade);
            return true;
        } catch (error) {
            return false;
        }
    }
}


