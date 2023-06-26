import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

// importação de orm
import { TypeOrmModule } from '@nestjs/typeorm';

// importação do modulo coffees
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // carrega as variáveis de ambiente
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // tipo do banco de dados
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true, // carrega as entidades automaticamente
      synchronize: true,
      // sincroniza as entidades com o banco de dados,
      // não é recomendado para PRODUÇAO,
      // porque ele faz é dropar as tabelas e criar novamente
    }),
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
