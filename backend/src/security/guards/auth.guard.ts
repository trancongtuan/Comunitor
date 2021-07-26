import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { TokenExpiredError } from 'jsonwebtoken';
import { TokenExpiredException } from '../../core/exceptions/token-expired.exception';
import { TokenInvalidException } from '../../core/exceptions/token-invalid.exception';
import { UnAuthorizeException } from '../../core/exceptions/un-authorize.exception';
import { decodeJwt, verifyJwt } from '../../core/shares/json-web-token.share';
import { UserService } from '../../modules/users/user.service';
import { UserStatusEnum } from '../../core/enums/user_status.enum';
import { UserNotFoundException } from '../../core/exceptions/user-not-found.exception';
import { UserBlockException } from '../../core/exceptions/user-block.exception';
import { Reflector } from '@nestjs/core';
import { appConstants } from '../../core/constants/app.constants';
import { RoleService } from '../../modules/roles/role.service';
import { PermissionService } from '../../modules/permissions/permission.service';
import { intersection } from 'lodash';

@Injectable()
export class AuthGuard implements CanActivate {
  private log = new Logger('authen');

  constructor(
    @Inject('UserService') private userService: UserService,
    private reflector: Reflector,
    @Inject('RoleService') private roleService: RoleService,
    @Inject('PermissionService') private permissionService: PermissionService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authToken: string | undefined = request.headers.authorization;
    if (!authToken) {
      throw new UnAuthorizeException();
    }
    if (authToken) {
      this.verifyToken(authToken.substring(7, authToken.length));

      const payload = decodeJwt(authToken.substring(7, authToken.length));
      const user = await this.userService.findById(payload.username);
      if (user === null || user === undefined) {
        throw new UserNotFoundException();
      }
      if (user.status === UserStatusEnum._BLOCK) {
        throw new UserBlockException();
      }

      const permissions = this.reflector.get<string[]>(
        appConstants._PERMISSION,
        context.getHandler(),
      );
        if ( permissions ) {
          return true
        } 
        return false

      // if (permissions !== undefined) {
      //   const authorize = await this.getListPermissionOfUser(user);
      //   if (Array.isArray(permissions)) {
      //     for (const permission of permissions) {
      //       this.log.debug(permission);
      //       this.log.debug(typeof permission);
      //       if (typeof permission !== 'string') {
      //         throw new HttpException(
      //           '_PERMISSION_SET_TO_META_DATA_INVALID',
      //           200,
      //         );
      //       }
      //     }
      //     const mergeAuthorizeWithPermissionInput = intersection(
      //       authorize,
      //       permissions,
      //     );
      //     if (mergeAuthorizeWithPermissionInput.length === 0) {
      //       throw new HttpException('_FORBIDDEN', 200);
      //     }
      //   } else if (typeof permissions === 'string') {
      //     const mergeAuthorizeWithPermissionInput = intersection(authorize, [
      //       permissions,
      //     ]);
      //     if (mergeAuthorizeWithPermissionInput.length === 0) {
      //       throw new HttpException('_FORBIDDEN', 200);
      //     }
      //   } else {
      //     throw new HttpException('_PERMISSION_SET_TO_META_DATA_INVALID', 200);
      //   }
      // }
    }

    return true;
  }

  verifyToken(token: string): void {
    try {
      verifyJwt(token, `${process.env.PUBLIC_KEY}`);
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new TokenExpiredException();
      }
      throw new TokenInvalidException();
    }
  }

  async getListPermissionOfUser(user: any): Promise<string[]> {
    const role4user = await this.roleService.findById(user.role);
    const authorize: string[] = [];
    const perids = role4user.permission.map((perid) => perid);
    const permissions = await this.permissionService.findPermissionByListId(
      perids,
    );
    permissions.forEach((permission) => {
      authorize.push(permission.permissionCode);
    });
    return authorize;
  }
}
