import { UsersService } from './../users/users.service'
import { Injectable } from '@nestjs/common'
import { User } from 'src/common/type'
import { JwtService } from '@nestjs/jwt'

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
  async login(user: User) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
