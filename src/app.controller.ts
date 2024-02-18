import { Body, Get,Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
    postUser(@Body() dto: CreateUserDto){
        return this.appService.postUser(dto)
    }

}
