import { CacheModule, Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livros } from './livros.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Livros]),
  ],
  controllers: [LivrosController],
  providers: [LivrosService]
})
export class LivrosModule {}