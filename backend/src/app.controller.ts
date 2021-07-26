import {
  Controller,
  Get,
  Logger,
  Req,
  SetMetadata,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { SuccessResponse } from './core/response/success-response';
import { AuthGuard } from './security/guards/auth.guard';
import { AllExceptionsFilter } from './core/exceptions/handle/exception.filter';
import { decodeJwt } from './core/shares/json-web-token.share';
import { appConstants } from './core/constants/app.constants';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('HI!')
@ApiHeader({
  name: 'Authorization',
  description: 'token',
})
@Controller()
export class AppController {
  private logger = new Logger('test.api');

  @Get()
  @UseFilters(new AllExceptionsFilter())
  @UseGuards(AuthGuard)
  @SetMetadata(appConstants._PERMISSION, ['va.mb.um.c'])
  getHello(@Req() req): SuccessResponse {
    const token = req.headers.authorization;
    const payload = decodeJwt(token);
    return new SuccessResponse(payload);
  }
}
