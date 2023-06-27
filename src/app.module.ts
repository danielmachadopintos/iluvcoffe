import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

// importação de orm
import { TypeOrmModule } from '@nestjs/typeorm';

// importação do modulo coffees
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import appConfig from './config/app.config';

// load

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [appConfig],
    // }), // carrega as variáveis de ambiente
    CoffeesModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres', // tipo do banco de dados
        host: 'localhost',
        port: 5431,
        username: 'postgres',
        password: 'pass123',
        database: 'postgres',
        autoLoadEntities: true, // carrega as entidades automaticamente
        synchronize: true,
        // sincroniza as entidades com o banco de dados,
        // não é recomendado para PRODUÇAO,
        // porque ele faz é dropar as tabelas e criar novamente
      }),
    }),
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
