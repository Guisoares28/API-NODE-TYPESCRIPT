import { Cidade, CidadeSchema } from "../dtos/cidadeDTO";
import * as yup from "yup";

export class Validador{

    static async validarSchema(cidade: Cidade): Promise<{sucesso:boolean, message?: string, fields?:any}>{
        try{
            await CidadeSchema.getSchema().validate(cidade, {
                abortEarly: false
            });
            return {sucesso:true};
        }catch(error){
            if(error instanceof yup.ValidationError){
                return {
                    sucesso: false,
                    fields: error.inner.map(e => ({
                        field: e.path,
                        message: e.message
                    }))
                };
            }
        }
    }
}