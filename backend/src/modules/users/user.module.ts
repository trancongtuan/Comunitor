import { PermissionModule } from './../permissions/permission.module'
import { RoleModule } from './../roles/role.module'
import { UserService } from './user.service'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './user.schema'
import { UsersController } from './users.controller'
import { AuthGuard } from 'src/security/guards/auth.guard'
import { APP_GUARD } from '@nestjs/core'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    RoleModule,
    PermissionModule,
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
