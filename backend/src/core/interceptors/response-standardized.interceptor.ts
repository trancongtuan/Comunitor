import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import myCode from '../constants/my-code.constants';

@Injectable()
export class ResponseStandardizedInterceptor implements NestInterceptor {
  private logger = new Logger('response');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response: any) => {
        this.logger.debug(response);
        if (response.result) {
          const keysOfResponse = Object.keys(response);
          if (keysOfResponse.length > 0) {
            for (const key of keysOfResponse) {
              if (
                response[key] === null ||
                response[key] === myCode._UNKNOWN.numberCode ||
                response[key] === myCode._UNKNOWN.stringCode
              ) {
                delete response[key];
              }
            }
            return response;
          }
          return response;
        }
        return response;
      }),
    );
  }
}
