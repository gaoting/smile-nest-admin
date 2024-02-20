import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from 'path'
import { NestExpressApplication } from '@nestjs/platform-express';
import { TestInterceptor } from './test.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets('public', { prefix: '/static/' });
  app.setBaseViewsDir(join(__dirname,'..','views'))
  app.setViewEngine('ejs')
  app.useGlobalInterceptors(new TestInterceptor());

  await app.listen(3000);
}
bootstrap();
