import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entitys/postagem.entitys";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_tema"})
export class Tema {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number 

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    descricao: string

    @ApiProperty({type: () => Postagem})
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
}