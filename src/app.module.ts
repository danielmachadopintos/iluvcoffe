import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// importação de orm
import { TypeOrmModule } from '@nestjs/typeorm';

// importação do modulo coffees
// import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    // CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // tipo do banco de dados
      host: 'localhost', // endereço do banco de dados
      port: 5431, // porta do banco de dados
      username: 'postgres', // usuário do banco de dados
      password: 'pass123',
      database: 'postgres', // nome do banco de dados
      autoLoadEntities: true, // carrega as entidades automaticamente
      synchronize: true,
      // sincroniza as entidades com o banco de dados,
      // não é recomendado para produção,
      // porque ele faz é dropar as tabelas e criar novamente
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
