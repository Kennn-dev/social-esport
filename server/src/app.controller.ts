import { UPLOAD_TYPE } from './constaints/file';
import { AppService } from './app.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadResponse } from './types/cloudinary';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
  ) {}

  @Post('/upload')
  // @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: 10000000, // 10 Mb
      },
    }),
  )
  async upload(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadResponse> {
    return this.appService.upload(file);
  }

  @Post('/destroy/:publicId')
  // @UseGuards(JwtAuthGuard)
  async destroyImage(@Param('publicId') publicId): Promise<UploadResponse> {
    console.log(publicId);
    return this.appService.destroy(publicId);
  }

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(@Req() req: any): Promise<any> {
    return this.authService.loginWithFacebook(req.user);
  }

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    return HttpStatus.OK;
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.loginWithGoogle(req.user);
  }
}
