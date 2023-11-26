import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  TcpOptions,
  Transport,
} from '@nestjs/microservices';
import { UserModule } from './user.module';

async function bootstrap() {
  // const app = await NestFactory.create(UserModule);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'user',
        port: 3002,
      },
    } as TcpOptions,
  );

  app.listen();
}
bootstrap();
