import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { AuthService } from './auth/auth.service'
import { Response } from 'express'

const API_DEFAULT_PREFIX = '/api/v1/'
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post(API_DEFAULT_PREFIX + 'auth/login')
  async login(@Request() req, @Res() res: Response) {
    return this.authService.login(req.user, res)
  }

  @UseGuards(JwtAuthGuard)
  @Get(API_DEFAULT_PREFIX + 'profile')
  getProfile(@Request() req) {
    return req.user
  }
}
