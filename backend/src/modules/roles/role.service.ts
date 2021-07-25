import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from './role.schema';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name)
    private readonly roleModel: Model<RoleDocument>,
  ) {}

  async create(data: any): Promise<RoleDocument> {
    return await this.roleModel.create(data);
  }

  async findById(id: string): Promise<RoleDocument | null> {
    return this.roleModel.findOne({ _id: id });
  }

  async findByRoleCode(roleCode: string): Promise<RoleDocument | null> {
    return this.roleModel.findOne({ roleCode });
  }

  async countAllDocument(): Promise<number> {
    return this.roleModel.countDocuments();
  }
}
