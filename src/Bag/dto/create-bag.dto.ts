import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsUUID } from "class-validator";


export class CreateBagDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário.',
    example: '0c4b59bb-e169-40a4-81f5-4c34d2c2ca4b',
  })
  userId: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do produto.',
    example: '0c4b59bb-e169-40a4-81f5-4c34d2c2ca4b',
  })
  productId: string;
}
