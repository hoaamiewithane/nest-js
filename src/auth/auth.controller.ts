import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(@Body(ValidationPipe) signInDto: SignInDto) {
    try {
      console.log(signInDto);
      return 'sign-in';
    } catch (errors) {
      console.error(errors);
      throw new BadRequestException('Validation failed');
    }
  }

  @Post('sign-up')
  async signUp(@Body() createUserDto: SignUpDto) {
    return await this.authService.signUp(createUserDto);
  }

  @Get('me')
  me() {
    return 'me';
  }
}
