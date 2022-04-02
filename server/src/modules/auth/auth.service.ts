import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { handleAfterLogin } from 'src/common/socialLogin';
import { TypeLogin } from 'src/constants/user';
import { ResponseLoginDto } from '../user/dto/user.dto';
import { User } from '../user/models/users.schema';
import { UserService } from '../user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: any = await this.usersService.findOne({ email });
    const isMatch = await user.comparePassword(pass);
    const { password, ...rs } = user._doc;
    if (isMatch) {
      return rs;
    }
    return null;
  }

  async login(user: User): Promise<ResponseLoginDto | null> {
    return {
      user,
      accessToken: this.jwtService.sign({ email: user.email, sub: user._id }),
      tokenType: 'Bearer',
    };
  }

  async loginWithGoogle(payload): Promise<ResponseLoginDto | null> {
    try {
      const user: any = await this.usersService.findOne({
        email: payload.user.email,
      });
      if (!user) {
        // Register
        const newUser: any =
          await this.usersService.createUserWithSocialAccount({
            email: payload.user.email,
            firstName: payload.user.firstName,
            lastName: payload.user.lastName,
            googleId: payload.user.id,
            avatar: payload.user.avatar,
            password: null,
          });
        return handleAfterLogin(newUser, payload, TypeLogin.GOOGLE, () => {
          return {
            user: newUser,
            accessToken: this.jwtService.sign({
              email: newUser.email,
              sub: newUser._id,
            }),
            tokenType: 'Bearer',
          };
        });
      }
      return handleAfterLogin(user, payload, TypeLogin.GOOGLE, () => {
        return {
          user,
          accessToken: this.jwtService.sign({
            email: user.email,
            sub: user._id,
          }),
          tokenType: 'Bearer',
        };
      });
    } catch (error) {
      console.error(error);
      if (typeof error === 'string') throw new HttpException(error, 500);
      if (error instanceof Error) throw new HttpException(error.message, 500);
    }
  }
  async loginWithFacebook(payload: any): Promise<ResponseLoginDto | null> {
    try {
      const user: any = await this.usersService.findOne({
        email: payload.user.email,
      });
      if (!user) {
        // Register
        const newUser: any =
          await this.usersService.createUserWithSocialAccount({
            email: payload.user.email,
            firstName: payload.user.firstName,
            lastName: payload.user.lastName,
            password: null,
            facebookId: payload.user.id,
          });
        return handleAfterLogin(newUser, payload, TypeLogin.FACEBOOK, () => {
          return {
            user: newUser,
            accessToken: this.jwtService.sign({
              email: newUser.email,
              sub: newUser._id,
            }),
            tokenType: 'Bearer',
          };
        });
      }
      return handleAfterLogin(user, payload, TypeLogin.FACEBOOK, () => {
        return {
          user,
          accessToken: this.jwtService.sign({
            email: user.email,
            sub: user._id,
          }),
          tokenType: 'Bearer',
        };
      });
    } catch (e) {
      console.log(e);
      if (typeof e === 'string') {
        throw new HttpException(e, 500);
      } else if (e instanceof Error) {
        throw new HttpException(e.message, 500);
      }
    }
  }
}
