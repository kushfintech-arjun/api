import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'user-service',
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
      {
        name: 'auth-service',
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
