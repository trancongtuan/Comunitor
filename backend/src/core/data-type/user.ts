import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { GenderEnum } from '../enums/gender.enum';
import { UserStatusEnum } from '../enums/user_status.enum';

export class UserVm {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNumber()
  @IsNotEmpty()
  age: number;
  
  @IsString()
  @IsNotEmpty()
  password: string
  
  @IsString()
  @IsNotEmpty()
  gender: GenderEnum

  @IsString()
  @IsNotEmpty()
  status: UserStatusEnum;

  @IsString()
  @IsNotEmpty()
  role: string;
}
