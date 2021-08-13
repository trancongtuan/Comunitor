import { HttpException } from '@nestjs/common';

export class PasswordNotCorrectException extends HttpException {
  constructor() {
    super('_PASSWORD_NOT_CORRCT', 400);
  }
}
