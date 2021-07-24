import { HttpException } from '@nestjs/common';

export class UnAuthorizeException extends HttpException {
  constructor() {
    super('_UNAUTHORIZED', 200);
  }
}
