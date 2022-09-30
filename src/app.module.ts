// Libs:
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
// Modules:
import { AppService } from 'app.service';
import { AppController } from 'app.controller';
import { UsersModule } from 'modules/users/users.module';
import { ProductsModule } from 'modules/products/products.module';
import { DatabaseModule } from './database/database.module';
// Environments:
import { environments } from './environments';
// Config:
import config from './config';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environments[process?.env?.NODE_ENV || 'dev'],
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        NODE_ENV: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
