import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  created_at:Date;

  @Prop()
  deleted_at:Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
