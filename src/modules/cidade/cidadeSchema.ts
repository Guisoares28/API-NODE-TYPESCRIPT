import * as yup from "yup";

export const cidadeSchema = yup.object({
    nome: yup.string().required(),
    estado: yup.string().required().max(3)
});

export type Cidade = yup.InferType<typeof cidadeSchema>;


