import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity/flavor.entity';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // generate id with increment the value
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  //   @Column('json', { nullable: true }) // json type
  //   flavors: string[];
  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // ['insert' | 'update'] you can this to cascade the insert or update
  })
  flavors: Flavor[];

  @Column({ default: 0 })
  recommendations: number;
}
