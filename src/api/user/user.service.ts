import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
// import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { username } = createUserDto;
    const user = await this.userRepository.findOne({ where: { username } });
    return user
      ? { data: '已有此用户' }
      : await this.userRepository.save(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const findId = await this.userRepository.findOne({ where: { id } });
    console.log(findId, updateUserDto, 'rrrrrrrr---');
    //   return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async registerUser(info: { username: string; password: string }) {
    const { username, password } = info;
    const user = await this.userRepository.findOne({where:{username}})
    if(!user) {
      const saltOrRounds = 10
      const pwd = await bcrypt.hash(password, saltOrRounds)
      await this.userRepository.createQueryBuilder().insert().into(UserEntity).values([
        {
          username,
          password: pwd,
          createdAt: Date.now() / 1000,
          updatedAt: Date.now() / 1000
        }
      ]).execute()

      return {
        code: 0,
        message: 'ok'
      }

    }
    return {
      code: 500,
      message: '用户已存在',
    };
  }
}
