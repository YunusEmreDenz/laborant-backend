import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  signUp(signUpDto: SignUpDto) {
  const error = this.userService.create(signUpDto);
  if(!error){
    return error
  }
  
  }
  

  signIn(signInDto: SignInDto) {
    return this.userService.create(signInDto);
  }
}
