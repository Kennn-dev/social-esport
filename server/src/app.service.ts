import { CloudinaryService } from './modules/cloudinary/cloudinary.service';
import { Injectable, HttpStatus } from '@nestjs/common';
import { UploadResponse } from './types/cloudinary';

@Injectable()
export class AppService {
  constructor(private cloudinaryService: CloudinaryService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async upload(file: Express.Multer.File): Promise<UploadResponse> {
    const { url, resource_type, public_id } =
      await this.cloudinaryService.upload(file);

    return {
      status: HttpStatus.OK,
      message: 'Upload success',
      url,
      type: resource_type,
      public_id,
    };
  }
  async destroy(publicId: string): Promise<any> {
    const realPublicId = `social-esport/${publicId}`;
    const { result } = await this.cloudinaryService.destroy(realPublicId);
    return {
      status: HttpStatus.OK,
      result,
    };
  }
}
