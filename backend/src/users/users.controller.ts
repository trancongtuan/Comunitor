import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { UersDto } from './dto/create-users.dto'
import { Users } from './schemas/users.schema'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor'

@UseInterceptors(LoggingInterceptor)
@Controller('api/v1/')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('users')
  async create(@Body() createCatDto: UersDto) {
    await this.userService.create(createCatDto)
  }
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async findAll(): Promise<Users[]> {
    return this.userService.findAll()
  }
}
