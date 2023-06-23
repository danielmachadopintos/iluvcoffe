import { Coffee } from 'src/coffees/entities/coffe.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [],
});
