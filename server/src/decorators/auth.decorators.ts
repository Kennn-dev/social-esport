import { JwtAuthGuard } from './../guards/jwt-auth.guard';
import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { Role } from 'src/constaints/role';
import { RolesGuard } from 'src/guards/role.guard';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(JwtAuthGuard, RolesGuard),
  );
}
export const CurrentUser = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    // console.log('creent', data, ctx.getArgs()[2]);
    const user = ctx.getArgs()[2].req.user;
    console.log('Userr===========', user);
    return user;
  },
);
