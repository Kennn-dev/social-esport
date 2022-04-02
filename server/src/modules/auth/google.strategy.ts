import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { LoginPayload } from 'src/common/socialLogin';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_APP_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `${process.env.APP_URL}/google/redirect`,
      scope: ['email', 'profile'],
      profileFields: ['emails', 'name'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { id, name, emails, photos } = profile;
    const payload: LoginPayload = {
      user: {
        id,
        avatar: photos[0].value,
        email: emails[0].value,
        firstName: name.givenName,
        lastName: name.familyName,
        googleAccessToken: accessToken,
      },
      accessToken,
    };

    done(null, payload);
  }
}
