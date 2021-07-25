import { APP_FILTER, APP_GUARD } from '@nestjs/core'
import { AllExceptionsFilter } from './core/exceptions/handle/exception.filter'
import { AuthModule } from './security/auth.module'
import { UserModule } from './modules/users/user.module'
import { RoleModule } from './modules/roles/role.module'
import { PermissionModule } from './modules/permissions/permission.module'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { ResponseStandardizedInterceptor } from './core/interceptors/response-standardized.interceptor'
import { LoggerMiddleware } from './middleware/logger.middleware'
import { AuthGuard } from './security/guards/auth.guard'
import { UsersController } from './modules/users/users.controller'

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
  controllers: [AppController],
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
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('api/v1/*')
  }
}
