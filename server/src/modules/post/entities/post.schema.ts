import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';
import { Document } from 'mongoose';
import { TYPE_POST_VIEW } from 'src/constants/post';
import { User } from 'src/modules/user/models/users.schema';
import { TTimestamp } from 'src/types/common';

export type PostDocument = Post & Document & TTimestamp;
@Schema({ timestamps: true })
export class Post {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ default: null })
  content: string;

  @Prop()
  listImage: string[];

  @Prop({ default: TYPE_POST_VIEW.PUBLIC })
  typeView: TYPE_POST_VIEW;

  @Prop({ default: true })
  canComment: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  author: string | Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);
