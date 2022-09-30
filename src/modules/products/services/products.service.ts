// Libs:
import { Injectable, NotFoundException } from '@nestjs/common';
// Entities:
import { Product } from 'modules/products/entities/product.entity';
// DTOs:
import {
  CreateProductDTO,
  UpdateProductDTO,
} from 'modules/products/dtos/product.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: this.counterId,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  create(payload: CreateProductDTO) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDTO) {
    const found = this.products.findIndex((product) => product.id === id);
    if (found === -1) throw new NotFoundException('Product not found');
    this.products[found] = {
      ...this.products[found],
      ...payload,
      id: id,
    };
    return {
      Message: 'Product updated',
      Updated: this.products[found],
    };
  }

  delete(id: number) {
    const found = this.products.findIndex((product) => product.id === id);
    if (found === -1) throw new NotFoundException('Product not found');
    this.products.splice(found, 1);
    return { message: 'Product deleted' };
  }
}
