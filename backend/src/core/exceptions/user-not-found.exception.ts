import { HttpException } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('_USER_NOT_FOUND', 200);
  }
}
