import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'auth-service',
        options: {
          host: 'auth',
          port: 3001,
        },
      },
      {
        name: 'user-service',
        options: {
          host: 'user',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
