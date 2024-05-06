// main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './auth/auth.module';
import * as mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }as ConnectOptions);
  console.log('MongoDB bağlantısı başarılı');

  await app.listen(3000);
}
bootstrap();
