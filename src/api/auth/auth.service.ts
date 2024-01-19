import { UserEntity } from '../user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto-js';

@Injectable()
export class AuthService {
  public constructor(
    @InjectRepository(UserEntity) private user:Repository<UserEntity>,
    private readonly jwtService: JwtService
  ){}

  public async validateUser(username:string, password:string): Promise<boolean> {
    const user  = await this.user.findOne({
      select:['username',"password"],
      where:{username}
    })
    return user && bcrypt.compare(password, user.password)
  }

  public certificate(user:any):string {
    const payload = {
      info: crypto.AES.encrypt(
        JSON.stringify({username:user.username, password: user.password}),
        'salt'
      ).toString()
    }
    return this.jwtService.sign(payload)
  }
}
