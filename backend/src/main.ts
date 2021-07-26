import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseStandardizedInterceptor } from './core/interceptors/response-standardized.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const logger: Logger = new Logger('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('RESTFUL API BY NESTJS BOILERPLATE')
    .setDescription('Sample project using nestjs')
    .setVersion('1.0')
    .addTag('RESTFUL_API')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('document', app, document);
  await app.listen(((process.env.SERVER_PORT as unknown) as number) || 8864);
  app.useGlobalInterceptors(new ResponseStandardizedInterceptor());
  logger.log(
    `application start with port ${
      ((process.env.SERVER_PORT as unknown) as number) || 8864
    }`,
  );
}

bootstrap();
