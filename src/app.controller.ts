import { Controller, Get, Post, Body } from '@nestjs/common'
// , UseGuards, Request
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
// import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    const token = this.jwtService.sign({
      username: body.username,
      password: body.password,
    });
    return {
      token,
    };
  }

  // @Get('profile')
  // @UseGuards(AuthGuard('jwt'))
  // getProfile(@Request() req: any) {
  //   return req
  // }
}
