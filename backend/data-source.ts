// backend/data-source.ts
import { DataSource } from 'typeorm';
import { User } from './src/users/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12357595',
  database: 'Authentication',
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
