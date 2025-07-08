// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', /*username Database*/      
      password: '******',  /*password Databse*/       
      database: ' ', /*Database Name*/           
      entities: [User],
      synchronize: true,           
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
