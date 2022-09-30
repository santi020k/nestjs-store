// Libs:
import { Injectable, NotFoundException } from '@nestjs/common';
// Entities:
import { Customer } from 'modules/users/entities/customer.entity';
// DTOs:
import {
  CreateCustomerDTO,
  UpdateCustomerDTO,
} from 'modules/users/dtos/customer.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Nicolas',
      lastName: 'Molina',
      phone: '3111111212',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(data: CreateCustomerDTO) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...data,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, changes: UpdateCustomerDTO) {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...customer,
      ...changes,
    };
    return this.customers[index];
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
