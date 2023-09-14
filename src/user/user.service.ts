import { Inject, Injectable } from '@nestjs/common';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: SignInDto) {
    const { username, password } = createUserDto;

    const user = new User();
    user.username = username;
    user.password = password;
    await this.userRepository.save(user);
    return 'success';
  }
}
