import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product} from './entities/product.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';
import { Prisma } from '@prisma/client';
import { handleError } from 'src/utils/handleError.utils';
import { identity } from 'rxjs';
import { isOwner } from 'src/utils/is-owner.utils';
import { Bag } from 'src/Bag/entities/bag.entity';
import { empty } from '@prisma/client/runtime';

@Injectable()
export class ProductService {

  constructor(private readonly prisma: PrismaService) {}

    findAll() {
      return this.prisma.product.findMany({where:{bagID:null}})
      }

    async findOne(id: string) {
      const record = await this.prisma.product.findUnique({
        where: { id },
        select: { id: true, title: true, imgURL:true},
      });
      
      if (!record) {
        throw new NotFoundException(`Registro com id '${id}' não encontrado.`);
      }

      return record;
    }

  create(dto: CreateProductDto,user) {

    const data: Prisma.ProductCreateInput = {
      title: dto.title,
      description: dto.description,
      imgURL: dto.imgURL,
      new: dto.new,
      price: dto.price,
      user:{
        connect:{
          id:user.id
        }
      },
      category:{
        connect:{
          id:dto.categoryID
        }
      }
    }

    return this.prisma.product
    .create({
      data,
      select: {
        title:true,
        description:true,
        imgURL:true,
        new:true,
        price:true,
        user:{
          select:{
            id:true,
            name:true
          }
        },
        category:{
          select:{
            title:true,
          }
        }
      }
    }).catch(handleError)
  }


   async update(id: string,dto:UpdateProductDto,user){ //
    const selectProduct = await this.prisma.product.findUnique({where:{id}});
    isOwner(user,selectProduct.userID);
    this.findOne(id);

    const data: Prisma.ProductUpdateInput = {
      title: dto.title,
      description: dto.description,
      imgURL: dto.imgURL,
      new: dto.new,
      price: dto.price,
      user:{
        connect:{
          id:user.id,
        }
      },
      category:{
        connect:{
          id:dto.categoryID
        }
      }
    }


    return this.prisma.product
      .update({
        where:{id},
        data,
        select: {
          title:true,
          description:true,
          imgURL:true,
          new:true,
          price:true,
          user:{
            select:{
              id:true,
              name:true
            }
          },
          category:{
            select:{
              title:true,
            }
          }
        }
      }).catch(handleError);
    }

    async delete(id: string,user) {
      const selectProduct = await this.prisma.product.findUnique({where:{id}});
      isOwner(user,selectProduct.userID)

      return await this.prisma.product.delete({ where: { id }}).catch(handleError);
    }

}
