import { Module } from '@nestjs/common';
import { UserModule } from '../modules/users/user.module';
import { AuthController } from './auth.controller';
import { RoleModule } from '../modules/roles/role.module';
import { PermissionModule } from '../modules/permissions/permission.module';

@Module({
  imports: [UserModule, RoleModule, PermissionModule],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
