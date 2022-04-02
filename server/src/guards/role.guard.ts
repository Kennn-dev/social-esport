import { GqlExecutionContext } from '@nestjs/graphql';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/constaints/role';
import { ROLES_KEY } from 'src/modules/auth/role/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);
    // console.log('requireRoles : %d', requiredRoles);
    if (!requiredRoles) {
      return true;
    }

    const req = ctx.getContext().req;
    // console.log(req.user);
    return requiredRoles === req.user.role;
  }
}
