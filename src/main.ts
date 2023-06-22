import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove campos que não estão no DTO
      transform: true, // transforma os dados para o tipo especificado no DTO, ex: string para number e etc
      // boolean também são convertidos, ex: 'true' para true

      forbidNonWhitelisted: true, // retorna um erro caso o DTO tenha campos não permitidos
      transformOptions: {
        enableImplicitConversion: true, // permite conversão implícita de tipos
      },
    }),
  ); // habilita o uso de pipes de validação

  await app.listen(3000);
}
bootstrap();
