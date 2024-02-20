import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('请求进入前',req, res);
    next();
    console.log('请求离开后');
  }
}
