import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from 'src/user/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(signUpDto: SignUpDto) {
    const user = new User();
    user.username = signUpDto.username;
    user.password = signUpDto.password;
    this.userService.create(user);
    return 'signUpDto';
  }
}
