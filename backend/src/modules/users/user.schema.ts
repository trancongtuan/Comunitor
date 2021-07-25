import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GenderEnum } from '../../core/enums/gender.enum';
import { UserStatusEnum } from '../../core/enums/user_status.enum';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop({ type: String, required: true, index: true })
  fullname: string;

  @Prop({ type: String, required: true, index: true })
  phoneNumber: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  username: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  email: string;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: String, required: true, unique: true, index: true })
  password: string;

  @Prop({ type: GenderEnum, index: true })
  gender: GenderEnum;

  @Prop({ type: UserStatusEnum, required: true, index: true })
  status: UserStatusEnum;

  @Prop({ type: String, required: true, index: true })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
