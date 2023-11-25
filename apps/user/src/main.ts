import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });

  app.startAllMicroservices();
}
bootstrap();
