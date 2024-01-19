import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('/register')
  public async register(@Body() body: any) {
    return await this.userService.registerUser(body);
  }

  @Post('/login')
  public async login(@Body() body: any) {
    const { username, password } = body;
    const result = await this.authService.validateUser(username, password);
    if (result) {
      return {
        code: 200,
        message: 'ok',
        token: this.authService.certificate({ username, password }),
      };
    }
    return {
      code: 403,
      message: 'fail',
    };
  }

  // @UseGuards(AuthGuard('jwt')) // 使用 'JWT' 进行验证
  // @Get()
  // public async init() {
  //   const result = await this.cryptoService.cryptoPassword();
  //   return {
  //     code: 0,
  //     token: result,
  //   };
  // }
}
