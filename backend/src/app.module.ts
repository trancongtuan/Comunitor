import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './core/exceptions/handle/exception.filter';
import { AuthModule } from './security/auth.module';
import { UserModule } from './modules/users/user.module';
import { RoleModule } from './modules/roles/role.module';
import { PermissionModule } from './modules/permissions/permission.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseStandardizedInterceptor } from './core/interceptors/response-standardized.interceptor';
import { UsersController } from './modules/users/user.controller';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RoleModule,
    PermissionModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseStandardizedInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
