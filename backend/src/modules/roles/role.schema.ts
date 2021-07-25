import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema({ collection: 'roles' })
export class Role {
  @Prop({ type: String, required: true })
  roleName: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  roleCode: string;

  @Prop({ type: [String] })
  permission: string[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
