import { TypeLogin } from './../constants/user';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { handleAfterLogin } from 'src/common/socialLogin';
import {
  InputLoginDto,
  ResponseLoginDto,
  ResponseUserDto,
} from 'src/user/dto/user.dto';
import { User } from 'src/user/models/users.schema';
import { UserService } from 'src/user/users.service';

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
  async loginWithFacebook(payload): Promise<ResponseLoginDto | null> {
    try {
      const user: any = await this.usersService.findOne({
        email: payload.user.email,
      });
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
