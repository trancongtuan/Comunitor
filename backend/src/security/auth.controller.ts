import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UserService } from '../modules/users/user.service';
import { UserNotFoundException } from '../core/exceptions/user-not-found.exception';
import { UserStatusEnum } from '../core/enums/user_status.enum';
import { UserBlockException } from '../core/exceptions/user-block.exception';
import { compareSync } from 'bcrypt';
import { PasswordNotCorrectException } from '../core/exceptions/pass-not-correct.exception';
import { generateJwt } from '../core/shares/json-web-token.share';
import { SuccessResponse } from '../core/response/success-response';
import { ParamValidatorPipe } from '../core/pipes/param-validator.pipe';
import { LoginVm } from './vm/login.vm';

@Controller('api')
export class AuthController {
  private logger = new Logger('auth');

  constructor(private userService: UserService) {}

  @Post('auth/login')
  async login(@Body(new ParamValidatorPipe()) body: LoginVm) {
    const { login, password } = body;
    const user = await this.userService.findByLogin(login);
    if (user === null || user === undefined) {
      throw new UserNotFoundException();
    }
    if (user.status === UserStatusEnum._BLOCK) {
      throw new UserBlockException();
    }
    if (!compareSync(password, user.password)) {
      throw new PasswordNotCorrectException();
    }

    const accInfo = {
      id: user._id.toHexString(),
      username: user.username,
    };

    const jwt = await generateJwt(
      accInfo,
      `${process.env.PRIVATE_KEY}`,
      'urn:issuer',
      'subject',
      '1h',
    );

    return new SuccessResponse({ tokenId: jwt });
  }
}
