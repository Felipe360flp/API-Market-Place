import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/Auth/loggerd-user.decorator';
import { User } from 'src/User/entities/user.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@ApiTags('Category')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar nova categoria. Somente para Admin.',
  })
  create(
    @LoggedUser() user: User,
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.create(user, createCategoryDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as categorias.',
  })
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma categoria pelo ID.',
  })
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar categoria pelo ID. Somente para Admin.',
  })
  update(
    @LoggedUser() user: User,
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.update(user, id, updateCategoryDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar categoria pelo ID. Somente para Admin.',
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    return this.categoryService.delete(user, id);
  }
}
