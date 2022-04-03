import { GqlExecutionContext } from '@nestjs/graphql';
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard, AuthModuleOptions } from '@nestjs/passport';
import { AuthenticationError } from 'apollo-server-express';
import { Optional } from '@nestjs/common';
import { getRequestUtils } from 'src/utils/auth';
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(@Optional() protected readonly options?: AuthModuleOptions) {
    super(options);
  }
  async canActivate(context: any): Promise<boolean> {
    const canActivate = super.canActivate(context);
    const success = await canActivate;
    if (!success) {
      return true;
    }
    const req = this.getRequest(context);
    req.jwt = req.user;
    return true;
  }
  getRequest(context: ExecutionContext) {
    return getRequestUtils(context);
  }
}
