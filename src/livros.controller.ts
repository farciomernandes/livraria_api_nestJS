import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livros } from './livros.model';
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {
    constructor(private readonly livrosService: LivrosService) {

    }

    @Get()
    async obterTodos(){
        return this.livrosService.findAll();
    }

    @Get(':id')
    async obterUm(@Param() params){
         return this.livrosService.findOne(params.id);
    }

    @Post()
    async criar(@Body() livro: Livros) {
        this.livrosService.create(livro);
    }

    @Put()
    async alterar(@Body() livro: Livros) {
        return this.livrosService.update(livro);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.livrosService.remove(params.id);
    }
}