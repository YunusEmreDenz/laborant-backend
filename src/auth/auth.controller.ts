import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserCredentials } from "./dto/user-credentials/user-credentials.interface";

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() userCredentials: UserCredentials) {
    const existingUser = await this.userService.findUserByEmail(userCredentials.email);
    if (existingUser) {
      return { message: 'User already exists' };
    }
    await this.userService.createUser(userCredentials);
    return { message: 'User registered successfully' };
  }

  @Post('login')
  async login(@Body() userCredentials: UserCredentials) {

  }
}

