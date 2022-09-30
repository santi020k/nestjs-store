// Libs:
import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
// Config
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): unknown {
    return {
      envs: {
        apiKey: this.configService.apiKey,
        nodeEnv: this.configService.nodeEnv,
        databaseName: this.configService.database.name,
        databasePort: this.configService.database.port,
      },
      message: `Hello World! ${this.configService.apiKey}`,
    };
  }
}
