import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UersDto } from './dto/create-users.dto'
import { Users, UsersDocument } from './schemas/users.schema'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<UsersDocument>,
  ) {}

  async create(createCatDto: UersDto): Promise<Users> {
    const createdCat = new this.userModel(createCatDto)
    return createdCat.save()
  }
  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec()
  }
  async findOne(name: string): Promise<Users> {
    return await this.userModel.findOne({ email: name }).exec()
  }
}
