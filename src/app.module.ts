import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiModule } from './api/api.module';
import { PluginModule } from './plugin/plugin.module';
import {JwtModule} from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret:'water',
      signOptions: {
        expiresIn: '7d'
      }
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'smile-admin',
      // entities: ['src/**/entities/*.entity{.ts,.js}'],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ApiModule,
    PluginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
