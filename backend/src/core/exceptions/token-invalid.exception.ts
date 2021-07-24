import { HttpException } from '@nestjs/common';

export class TokenInvalidException extends HttpException {
  constructor() {
    super('_TOKEN_INVALID', 200);
  }
}
