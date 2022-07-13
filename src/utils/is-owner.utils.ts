import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Bag } from 'src/Bag/entities/bag.entity';

export function isOwner(user: User,id:string) {
  if (user.id != id) {
    throw new UnauthorizedException('Você não tem permissão para alterar essa transação(Bag)!');
  }
}
