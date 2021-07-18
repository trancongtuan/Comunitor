import { Injectable } from '@nestjs/common'
import { User } from 'src/common/type'

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ]
  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find(user => user.username === userName)
  }
}
