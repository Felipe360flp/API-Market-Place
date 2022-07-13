import { Product } from "src/Product/entities/product.entity";

export class Category {
  id?: string;
  title: string;
  products?: Product[];
  createdAt?: Date;
  updatedAt?: Date;
}
