import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('facebook'))
  @Get('facebook')
  async getTokenAfterFacebookSignIn(@Req() req) {
    console.log(req.user);
  }
}
