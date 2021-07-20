import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { UersDto } from './dto/create-users.dto'
import { Users } from './schemas/users.schema'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('api/v1/')
export class UsersController {
  constructor(private readonly catsService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('users')
  async create(@Body() createCatDto: UersDto) {
    await this.catsService.create(createCatDto)
  }
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async findAll(): Promise<Users[]> {
    return this.catsService.findAll()
  }
}
