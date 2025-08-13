import * as yup from "yup";

const schema = yup.object({
    nome: yup.string().required(),
    estado: yup.string().required().max(3)
});

type Cidade = yup.InferType<typeof schema>;

class CidadeSchema{

    static getSchema(): yup.Schema{
        return schema;
    }
}

export { CidadeSchema, Cidade };