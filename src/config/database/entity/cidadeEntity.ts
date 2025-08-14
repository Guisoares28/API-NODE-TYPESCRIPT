import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class CidadeEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false, unique:true})
    nome:string;

    @Column({nullable:false})
    estado:string
}