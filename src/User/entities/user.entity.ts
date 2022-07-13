import {Product} from"src/Product/entities/product.entity"
import { Bag } from "src/Bag/entities/bag.entity";

export class User {
  id?: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  product?:Product;
  bag?:Bag;
  createdAt?: Date;
  updatedAt?: Date;
}
