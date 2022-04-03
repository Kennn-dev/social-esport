import { InternalServerErrorException } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const getRequestUtils = (context: ExecutionContext): any => {
  const req: any | undefined = context.switchToHttp()?.getRequest();
  if (req) {
    return req;
  }

  const gqlCtx: any = GqlExecutionContext.create(context).getContext();

  if (gqlCtx.req) {
    return gqlCtx.req;
  }

  throw new InternalServerErrorException(
    'Unable to find JwtRequest from ExecutionContext',
  );
};
