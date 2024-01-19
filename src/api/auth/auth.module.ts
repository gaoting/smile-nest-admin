import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity';
import { jwtSalt } from './constants';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret: jwtSalt,
      signOptions: {expiresIn:'30m'}
    })
  ],
  controllers: [AuthController, JwtStrategy],
  providers: [AuthService]
})
export class AuthModule {}
