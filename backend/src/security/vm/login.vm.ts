import { IsNotEmpty, IsString } from 'class-validator';

export class LoginVm {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  rememberMe: boolean;
}
