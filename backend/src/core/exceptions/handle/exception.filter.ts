import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import myCode from '../../constants/my-code.constants';
import { ErrorResponse } from '../../response/error-response.core';
import { RequestInvalidException } from '../request-invalid.exception';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private logger = new Logger('Exception');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const code =
      exception instanceof HttpException ? exception.getResponse() : '_UNKNOWN';
    const responseCode = myCode[`${code}`];
    let errorResponse = {};
    if (responseCode) {
      const error =
        exception instanceof RequestInvalidException
          ? exception.error
          : '${exception}';
      errorResponse = new ErrorResponse(responseCode, error);
    } else {
      errorResponse = new ErrorResponse({}, code);
    }
    const keysOfResponse = Object.keys(errorResponse);
    if (keysOfResponse.length > 0) {
      for (const key of keysOfResponse) {
        if (
          errorResponse[key] === null ||
          errorResponse[key] === myCode._UNKNOWN.numberCode ||
          errorResponse[key] === myCode._UNKNOWN.stringCode
        ) {
          delete errorResponse[key];
        }
      }
      return response.status(200).json(errorResponse);
    }
    return response.status(200).json(errorResponse);
  }
}
