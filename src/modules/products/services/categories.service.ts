// Libs:
import { Injectable, NotFoundException } from '@nestjs/common';
// Entities:
import { Category } from 'modules/products/entities/category.entity';
// DTOs:
import {
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from 'modules/products/dtos/category.dto';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(data: CreateCategoryDTO) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, changes: UpdateCategoryDTO) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  remove(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
