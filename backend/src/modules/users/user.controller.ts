import { ParamValidatorPipe } from './../../core/pipes/param-validator.pipe'
import { Body, Controller, Post } from '@nestjs/common'
import { UserVm } from 'src/core/data-type/user'
import { UserService } from './user.service'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from 'src/security/guards/auth.guard'
import { UseFilters } from '@nestjs/common'
import { AllExceptionsFilter } from 'src/core/exceptions/handle/exception.filter'
import { SetMetadata } from '@nestjs/common'
import { appConstants } from 'src/core/constants/app.constants'
import { ApiHeader } from '@nestjs/swagger'
import { SuccessResponse } from 'src/core/response/success-response'

@ApiHeader({
  name: 'Authorization',
  description: 'token',
})
@Controller('api/v1/')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('user/create')
  @UseGuards(AuthGuard)
  @UseFilters(new AllExceptionsFilter())
  @SetMetadata(appConstants._PERMISSION, ['va.mb.um.c'])
  async createUser(@Body(new ParamValidatorPipe()) body: UserVm) {
    this.userService.create(body)
    return new SuccessResponse({ data: true })
  }
}
