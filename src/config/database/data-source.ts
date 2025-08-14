import { DataSource } from "typeorm";
import { CidadeEntity } from "./entity/cidadeEntity";




export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "api-node.db",
    synchronize: true,
    entities: [CidadeEntity]
});

