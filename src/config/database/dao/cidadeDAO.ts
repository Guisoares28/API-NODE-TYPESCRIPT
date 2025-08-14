import { string } from "yup";
import { AppDataSource } from "../data-source";
import { CidadeEntity } from "../entity/cidadeEntity";

type resultOperation = Record<string,string>;

export const adicionarCidade = (user:CidadeEntity): Promise<resultOperation> =>{
    return AppDataSource.initialize()
        .then(async () => {
            console.log("Database connected!");
            await AppDataSource.manager.save(user);
            console.log(`User saved: ${user.nome} and Estado: ${user.estado}`);
            return { result: "sucess" };
        })
        .catch((error) => {
            return { error: error.message };
        })
        .finally(()  =>{
            AppDataSource.destroy();
        });
}
        
