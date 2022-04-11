import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  async upload(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        {
          folder: 'social-esport',
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      toStream(file.buffer).pipe(upload);
    });
  }

  async getImageUrl(source: string): Promise<string> {
    const url = v2.image(source, {
      quality: 'auto',
      crop: 'scale',
    });
    return url;
  }
  async destroy(publicId: string): Promise<any> {
    console.log(publicId);
    return new Promise((resolve, reject) => {
      v2.uploader.destroy(publicId, {}, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
}
