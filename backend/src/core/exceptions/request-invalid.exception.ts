import { HttpException } from '@nestjs/common';

export class RequestInvalidException extends HttpException {
  error: any;
  constructor(error) {
    super('_REQUEST_INVALID', 200);
    this.error = error;
  }
}
