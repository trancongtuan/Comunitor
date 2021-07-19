import { UsersService } from './../users/users.service'
import { HttpStatus, Injectable } from '@nestjs/common'
import { User } from 'src/common/type'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(userName)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
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
