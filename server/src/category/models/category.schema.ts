import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/models/users.schema';

export type CategoryDocument = Category & Document;
@Schema({ timestamps: true })
export class Category {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ default: null })
  thumbnail: string;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }],
  })
  followers: User[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
