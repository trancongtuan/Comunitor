import { HttpException } from '@nestjs/common';

export class TokenExpiredException extends HttpException {
  constructor() {
    super('_JWT_EXPIRED', 200);
  }
}
