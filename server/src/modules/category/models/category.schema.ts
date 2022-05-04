import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Document } from 'mongoose';
import { TTimestamp } from 'src/types/common';

export type CategoryDocument = Category & Document & TTimestamp;
@Schema({ timestamps: true })
export class Category {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ default: null })
  thumbnail: string;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId }],
  })
  followers: MongooseSchema.Types.ObjectId[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
