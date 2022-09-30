import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  // providers: [
  //   {
  //     provide: 'API_KEY',
  //     useValue: process.env.API_KEY,
  //   },
  // ],
  // exports: ['API_KEY'],
})
export class DatabaseModule {}
