import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { UserCredentials } from '../dto/user-credentials/user-credentials.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }

  async createUser(userCredentials: UserCredentials): Promise<User> {
    const createdUser = new this.userModel(userCredentials);
    return await createdUser.save();
  }
}

