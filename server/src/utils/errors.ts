import { HttpException } from '@nestjs/common';

export function handleError(error) {
  console.error(error);
  if (typeof error === 'string') throw new HttpException(error, 500);

  if (error instanceof Error) throw new HttpException(error.message, 500);
}
