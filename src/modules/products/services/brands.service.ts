// Libs:
import { Injectable, NotFoundException } from '@nestjs/common';
// Entities:
import { Brand } from 'modules/products/entities/brand.entity';
// DTOs:
import {
  CreateBrandDTO,
  UpdateBrandDTO,
} from 'modules/products/dtos/brand.dto';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
      image: 'https://i.imgur.com/U4iGx1j.jpeg',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const product = this.brands.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return product;
  }

  create(data: CreateBrandDTO) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...data,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, changes: UpdateBrandDTO) {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...changes,
    };
    return this.brands[index];
  }

  remove(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }
}
