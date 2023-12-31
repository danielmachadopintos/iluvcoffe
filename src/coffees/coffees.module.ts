import { Module } from '@nestjs/common';
import { CoffesController } from './coffes.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffe.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../../src/events/entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig), // partial registration
  ], // 👈 Adding Coffee Entity here to the array
  controllers: [CoffesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
})
export class CoffeesModule {}
