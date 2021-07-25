import { Controller, Get, Request } from '@nestjs/common'

const API_DEFAULT_PREFIX = '/api/v1/'
@Controller(API_DEFAULT_PREFIX)
export class AppController {
  constructor() {}
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
