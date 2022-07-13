import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/utils/handleError.utils';
import { isAdmin } from 'src/utils/is-admin.utils';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  private userSelect = {
    password: false,
    id: true,
    name: true,
    email: true,
    isAdmin: true,
    cpf: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async createADM(dto: CreateUserDto) {
    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

    const data: Prisma.UserCreateInput = {
      name: dto.name,
      cpf: dto.cpf,
      email: dto.email,
      password: await bcrypt.hash(dto.password, 10),
      isAdmin:true,
    };

    return this.prisma.user
      .create({
        data,
        select: {
          password: false,
          id: true,
          name: true,
          email: true,
          isAdmin: true,
          cpf: true,
          createdAt: true,
          updatedAt: true,
        },
      })
      .catch(handleError);
  }


  async create(dto: CreateUserDto) {
    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

    const data: Prisma.UserCreateInput = {
      name: dto.name,
      cpf: dto.cpf,
      email: dto.email,
      password: await bcrypt.hash(dto.password, 10),
      isAdmin:false,
    };

    return this.prisma.user
      .create({
        data,
        select: {
          password: false,
          id: true,
          name: true,
          email: true,
          isAdmin: true,
          cpf: true,
          createdAt: true,
          updatedAt: true,
        },
      })
      .catch(handleError);
  }

  async findAll() {
    const allUsers = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        password: false,
      },
    });

    if (allUsers.length === 0) {
      throw new NotFoundException('Não há usuários cadastrados.');
    }

    return allUsers;
  }

  async findOne(id: string) {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        password: false,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com id '${id}' não encontrado.`);
    }
    return record;
  }

  async update(user: User, updateUserDto: UpdateUserDto) {

    if (updateUserDto.password) {
      if (updateUserDto.password != updateUserDto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não são iguais.');
      }
    }

    delete updateUserDto.confirmPassword;

    const data: Partial<User> = { ...updateUserDto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    const id = user.id;

    return this.prisma.user
      .update({ where: { id }, data, select: this.userSelect })
      .catch(handleError);
  }

  async delete(user: User) {
    const id = user.id;
    return await this.prisma.user.delete({ where: { id } });
  }
}
