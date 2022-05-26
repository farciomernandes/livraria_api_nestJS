import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosModule } from './livros.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '172.24.0.2',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.PASSWORD_BANCO_DADOS,
      database: process.env.NOME_BANCO_DADOS,
      autoLoadModels: true,
      synchronize: true,
    }),
    LivrosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
