import { User } from "src/User/entities/user.entity";
import{Category} from"src/Category/entities/category.entity";
import {Bag} from "src/Bag/entities/bag.entity";

export class Product {
  id?: string;
  title:string;
  description:string;
  imgURL:string
  new:boolean;
  price:number;
  user?:User;
  category?:Category;
  bag?:Bag;
  createdAt?: Date;
  updatedAt?: Date;
}

