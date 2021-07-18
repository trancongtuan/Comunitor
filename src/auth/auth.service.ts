import { UsersService } from './../users/users.service'
import { Injectable } from '@nestjs/common'
import { User } from 'src/common/type'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(userName: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(userName)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    } else {
      return null
    }
  }
}
