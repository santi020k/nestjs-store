// Libs:
import { Module } from '@nestjs/common';
// Controllers:
import { CustomersController } from 'modules/users/controllers/customers.controller';
import { UsersController } from 'modules/users/controllers/users.controller';
// Services:
import { CustomersService } from 'modules/users/services/customers.service';
import { UsersService } from 'modules/users/services/users.service';
import { ProductsModule } from 'modules/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [CustomersController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
