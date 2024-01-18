import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from "./entities/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    RouterModule.register([
      {
        path: '', // 指定项目名称
        module: UserModule,
      },
    ]),
    TypeOrmModule.forFeature([UserEntity])
  ]
})
export class UserModule {}
