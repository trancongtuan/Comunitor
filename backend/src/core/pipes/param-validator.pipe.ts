import {
  ArgumentMetadata,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { RequestInvalidException } from '../exceptions/request-invalid.exception';

@Injectable()
export class ParamValidatorPipe implements PipeTransform {
  private logger = new Logger('ParamValidatorPipe');
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !ParamValidatorPipe.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new RequestInvalidException(errors);
    }
    return value;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private static toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
