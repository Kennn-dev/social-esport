import { UserService } from 'src/modules/user/users.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TypeLogin } from 'src/constants/user';
export type JWTPayload = {
  userId: string;
  email: string;
  role: TypeLogin;
};
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userSerivce: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<JWTPayload> {
    const user = await this.userSerivce.findOne({ _id: payload.sub });
    return { userId: payload.sub, email: payload.email, role: user.role };
  }
}
