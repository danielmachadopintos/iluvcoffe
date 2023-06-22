import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// extends with PartialType to make all properties update on the fly
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
