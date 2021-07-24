import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { User } from 'src/common/type'
import { ContextIdFactory, ModuleRef } from '@nestjs/core'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private moduleRef: ModuleRef) {
    super({
      passReqToCallback: true,
    })
  }

  async validate(
    request: Request,
    username: string,
    password: string,
  ): Promise<User> {
    const contextId = ContextIdFactory.getByRequest(request)
    const authService = await this.moduleRef.resolve(AuthService, contextId)
    const user = await authService.validateUser(username, password)
    if (!user) {
      throw new UnauthorizedException('id or password not correct')
    }
    return user
  }
}