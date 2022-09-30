// Libs:
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// Services:
import { AppService } from 'app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): unknown {
    return this.appService.getHello();
  }
}
ApiTags;
