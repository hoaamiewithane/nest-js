import { IsNotEmpty, Length } from 'class-validator';

export class SignInDto {
  @Length(6, 10, {
    message: 'Username must be between 6 and 10 characters',
  })
  @IsNotEmpty({
    message: 'Missing username',
  })
  username: string;

  @Length(6, 10, {
    message: 'Password must be between 6 and 10 characters',
  })
  @IsNotEmpty({
    message: 'Missing password',
  })
  password: string;
}
