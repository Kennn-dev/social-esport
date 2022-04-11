import { Role } from 'src/constaints/role';

export interface LoginPayload {
  email: string;
  password?: string;
}
export type TCurrentUser = {
  userId: string;
  email: string;
  role: Role;
};
