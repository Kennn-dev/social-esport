import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { getAvatarFacebook } from 'src/common/facebook';
@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: `${process.env.APP_URL}/facebook/redirect`,
      scope: 'email',
      profileFields: ['name', 'link', 'photos', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { name, emails, id } = profile;
    const payload: any = {
      user: {
        id,
        avatar: getAvatarFacebook(id, accessToken, 'normal'),
        email: emails[0].value,
        firstName: name.givenName,
        lastName: name.familyName,
        facebookAccessToken: accessToken,
      },
      accessToken,
    };

    done(null, payload);
  }
}
