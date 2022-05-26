
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livros } from './livros.model';

@Injectable()
export class LivrosService {

  constructor(
    @InjectModel(Livros)
    private livrosModel: typeof Livros
    ){}

    async create(createLivrosDto: Livros) {
    return this.livrosModel.create(createLivrosDto);
  }

  async findAll() {
    return this.livrosModel.findAll({ raw: true });
  }

  async findOne(id: number): Promise<Livros> {
    return this.livrosModel.findByPk(id, { raw: true });
  }

  async update(data: Livros): Promise<[number, Livros[]]> {
    return this.livrosModel.update(data, {
        where: { id: data.id }
    });
  }

  async remove(id: number) {
    const livro: Livros = await this.findOne(id);
    livro.destroy();
  }
}