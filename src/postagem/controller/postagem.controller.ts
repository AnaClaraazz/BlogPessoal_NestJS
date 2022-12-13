import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards,} from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Postagem } from "../entitys/postagem.entitys";
import { PostagemService } from "../service/postagem.service";



@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller('/postagens')
@ApiBearerAuth()
export class PostagemController {
    constructor(private readonly PostagemService: PostagemService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.PostagemService.findAll();
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.PostagemService.findById(id)
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.PostagemService.findByTitulo(titulo)
    }

    @Get('/texto/:texto')
    @HttpCode(HttpStatus.OK)
    findByTexto(@Param('texto') texto: string): Promise<Postagem[]> {
        return this.PostagemService.findByTexto(texto)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem>{
        return this.PostagemService.create(postagem)
    }



    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem>{
        return this.PostagemService.update(postagem)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.PostagemService.delete(id)
    }
}