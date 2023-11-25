import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('user-service') private readonly userClient: ClientProxy,
    @Inject('auth-service') private readonly authClient: ClientProxy,
  ) {}

  @Get('/user')
  async user() {
    return await firstValueFrom(this.userClient.send({ cmd: 'user' }, {}));
  }

  @Get('/auth')
  async auth() {
    return await firstValueFrom(this.authClient.send({ cmd: 'auth' }, {}));
  }
}
