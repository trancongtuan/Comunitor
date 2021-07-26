import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import bcrypt from 'bcrypt';

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

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findOne({username: id});
  }

  async create(data: User): Promise<UserDocument | null> {
    data.password = bcrypt.hashSync(data.password, 8);
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

  async createBucketData(bucket: any[]) {
    const bucketAfterEndcodePassword = bucket.map((value) => {
      value.password = bcrypt.hashSync(value.password, 8);
      return value;
    });
    return await this.userModel.create(bucketAfterEndcodePassword);
  }
}
