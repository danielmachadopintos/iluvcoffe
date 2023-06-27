// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger'; // 👈 import PartialType from @nestjs/swagger to have documentation in swagger
import { CreateCoffeeDto } from './create-coffee.dto';

// extends with PartialType to make all properties update on the fly
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
