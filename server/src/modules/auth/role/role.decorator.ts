import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/constants/role';

export const ROLES_KEY = 'role';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
