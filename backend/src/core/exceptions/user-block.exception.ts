import { HttpException } from '@nestjs/common';

export class UserBlockException extends HttpException {
  constructor() {
    super('_USER_IS_BLOCKED', 400);
  }
}
