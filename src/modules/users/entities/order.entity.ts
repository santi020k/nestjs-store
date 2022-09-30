// Entities:
import { Product } from 'modules/products/entities/product.entity';
import { User } from './user.entity';

export class Order {
  date: Date;
  user: User;
  Products: Product[];
}
