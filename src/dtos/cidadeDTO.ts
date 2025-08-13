import * as yup from "yup";

const schema = yup.object({
    nome: yup.string().required()
});

type Cidade = yup.InferType<typeof schema>;

class CidadeSchema{

    static getSchema(): yup.Schema{
        return schema;
    }
    
    static async validarSchema(cidade: Cidade): Promise<object>{
        try{
            await this.getSchema().validate(cidade, {
                abortEarly: false
            });
            return {sucesso:true};
        }catch(error){
            if(error instanceof yup.ValidationError){
                return {
                    message: "Erro de validação",
                    fields: error.inner.map(e => ({
                        field: e.path,
                        message: e.message
                    }))
                };
            }
        }
    }
}

export { CidadeSchema, Cidade };