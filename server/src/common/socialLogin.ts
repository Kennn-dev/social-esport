import { HttpException } from '@nestjs/common';
import { TypeLogin } from 'src/constants/user';
export type LoginPayload = {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    googleAccessToken?: string;
    facebookAccessToken?: string;
  };
  accessToken: string;
};
export function handleAfterLogin(
  user: any,
  payload: LoginPayload,
  type: TypeLogin,
  cb: () => any,
) {
  try {
    const { googleId, facebookId } = user;

    switch (type) {
      case TypeLogin.GOOGLE:
        if (!googleId) {
          user.googleId = payload.user.id;
          user.avatar = payload.user.avatar;
          user.save();
        }
        break;
      case TypeLogin.FACEBOOK:
        if (!facebookId) {
          user.facebookId = payload.user.id;
          user.avatar = payload.user.avatar;
          user.save();
        }
        break;
      default:
        break;
    }

    return cb();
  } catch (error) {
    console.error(error.message);
    throw new HttpException('Uh oh ! Something when wrong', 500);
  }
}
