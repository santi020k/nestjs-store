// Libs:
import { Module } from '@nestjs/common';
// Controllers:
import { ProductsController } from 'modules/products/controllers/products.controller';
import { BrandsController } from 'modules/products/controllers/brands.controller';
import { CategoriesController } from 'modules/products/controllers/categories.controller';
// Services:
import { ProductsService } from 'modules/products/services/products.service';
import { BrandsService } from 'modules/products/services/brands.service';
import { CategoriesService } from 'modules/products/services/categories.service';

@Module({
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
  exports: [ProductsService],
})
export class ProductsModule {}
