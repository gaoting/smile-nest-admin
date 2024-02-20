import { Module,MiddlewareConsumer,NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PluginModule } from './plugin/plugin.module';
import {JwtModule} from '@nestjs/jwt'

import { TestMiddleware } from './test.middleware';

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
    PluginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TestMiddleware).forRoutes('*')
  }
}
