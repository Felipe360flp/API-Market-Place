import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/User/entities/user.entity';
import { handleError } from 'src/utils/handleError.utils';
import { isAdmin } from 'src/utils/is-admin.utils';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User, createCategoryDto: CreateCategoryDto) {
    isAdmin(user);

    const data: Prisma.CategoryCreateInput = { title: createCategoryDto.title };

    data.title = this.dataTreatment(data.title);

    return await this.prisma.category.create({ data }).catch(handleError);
  }

  async findAll(): Promise<Category[]> {
    const allCategory = await this.prisma.category.findMany();

    if (allCategory.length === 0) {
      throw new NotFoundException('Não há categorias cadastradas.');
    }

    return allCategory;
  }

  async findOne(id: string) {
    const record = await this.prisma.category.findUnique({
      where: { id },
      select: { id: true, title: true },
    });

    if (!record) {
      throw new NotFoundException(`Registro com id '${id}' não encontrado.`);
    }

    return record;
  }

  async update(user: User, id: string, updateCategoryDto: UpdateCategoryDto) {
    isAdmin(user);

    await this.findOne(id);

    const data: Partial<Category> = { ...updateCategoryDto };

    data.title = this.dataTreatment(data.title);

    return this.prisma.category
      .update({ where: { id }, data })
      .catch(handleError);
  }

  async delete(user: User, id: string) {
    isAdmin(user);

    await this.findOne(id);

    await this.prisma.category.delete({ where: { id } });

    return `This action removes a #${id} category`;
  }

  dataTreatment(data: string) {
    return data
      .normalize('NFD')
      .replace(/[^a-zA-Zs]/g, '')
      .toLowerCase();
  }
}
