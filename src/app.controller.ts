import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiConsumes } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api/hello')
  async getHelloPost(@Body() body: { name: string, email: string }): Promise<Object> {

    return { success: true, message: 'User created successfully', rat: await this.appService.insertUser(body)};
  }
}
