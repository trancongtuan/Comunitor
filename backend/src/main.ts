import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ResponseStandardizedInterceptor } from './core/interceptors/response-standardized.interceptor';
import { Logger } from '@nestjs/common';
import { AuthGuard } from './security/guards/auth.guard';

const logger: Logger = new Logger('main');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors()
  app.useGlobalInterceptors(new ResponseStandardizedInterceptor());
  await app.listen(3000)
  logger.log(
    `application start with port ${
      ((process.env.SERVER_PORT as unknown) as number) || 3000
    }`,
  );
}
bootstrap()
