import { CoffeeRefactor1687466166424 } from 'src/migrations/1687466166424-CoffeeRefactor';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres123',
  database: 'postgres',
  entities: [],
  migrations: [CoffeeRefactor1687466166424],
});
