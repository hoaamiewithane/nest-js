import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/user/entities/user.providers';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [AuthController],
  providers: [...userProviders, AuthService, UserService],
})
export class AuthModule {}
