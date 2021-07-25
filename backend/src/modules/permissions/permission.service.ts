import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Permission, PermissionDocument } from './permission.schema';

@Injectable()
export class PermissionService {
  constructor(
    @InjectModel(Permission.name)
    private readonly permissionModel: Model<PermissionDocument>,
  ) {}

  async fetchAll(): Promise<Permission[]> {
    return await this.permissionModel.find({});
  }

  async create(data: any): Promise<PermissionDocument> {
    return await this.permissionModel.create(data);
  }

  public async findPermissionByListId(
    ids: string[],
  ): Promise<PermissionDocument[]> {
    return await this.permissionModel.find({ _id: { $in: ids } });
  }

  public async findPermissionByGroupCode(
    groupCode: string,
  ): Promise<PermissionDocument[]> {
    return await this.permissionModel.find({ groupCode });
  }

  public async countAllDocument(): Promise<number> {
    return await this.permissionModel.countDocuments();
  }
}
