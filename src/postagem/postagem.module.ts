import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controller/postagem.controller";
import { Postagem } from "./entitys/postagem.entitys";
import { PostagemSerivice } from "./service/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemSerivice],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
    
})
export class PostagemModule { }