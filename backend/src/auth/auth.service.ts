import { UsersService } from './../users/users.service'
import { HttpStatus, Injectable } from '@nestjs/common'
import { User } from 'src/common/type'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(userName)
    let checkpass = await bcrypt.compare(password, user.password)
    if (user && checkpass) {
      return { userId: user.name, username: user.email }
    } else {
      return null
    }
  }
  async login(user: User, res: Response) {
    const payload = { username: user.username, sub: user.userId }
    let data = {
      access_token: this.jwtService.sign(payload),
    }
    return res.status(HttpStatus.OK).send(data)
  }
}
