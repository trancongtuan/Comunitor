import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PermissionDocument = Permission & Document;

@Schema({ collection: 'permissions' })
export class Permission {
  @Prop({ type: String, required: true, index: true })
  groupCode: string;

  @Prop({ type: String, required: true })
  groupName: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  permissionCode: string;

  @Prop({ type: String, required: true, index: true })
  permissionName: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
