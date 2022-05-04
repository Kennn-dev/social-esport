import { Category, CategorySchema } from './models/category.schema';
import { forwardRef, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    forwardRef(() => UserModule),
  ],
  providers: [CategoryResolver, CategoryService],
  exports: [CategoryService, MongooseModule],
})
export class CategoryModule {}
