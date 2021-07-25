import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
const bcrypt = require('bcrypt');


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async fetchAll(): Promise<UserDocument[]> {
    return this.userModel.find({});
  }

  public async findByLogin(login: string): Promise<UserDocument | null> {
    return this.userModel.findOne({
      $or: [{ username: login }, { email: login }],
    });
  }

  async findById(username: string): Promise<UserDocument | null> {
    try {
      const data = await this.userModel.findOne({ username })
      return data
    } catch (error) {
      console.log(error)
      return
    }
  }

  async create(data: User): Promise<UserDocument | null> {
    data.password = await bcrypt.hashSync(data.password, 10);
    return await this.userModel.create(data);
  }

  async findByIdAndUpdate(id: string, dataUpdate: any): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, dataUpdate);
  }

  async findByIdAndDelete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }

  async countAllDocument(): Promise<number> {
    return this.userModel.countDocuments();
  }
}
