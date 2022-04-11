import { FOLLOW_STATUS } from './../../../constaints/follow';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Document } from 'mongoose';

export type FollowDocument = Follow & Document;
@Schema({ timestamps: true })
export class Follow {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  followerId: string;

  @Prop({ default: FOLLOW_STATUS.HOLD })
  status: number;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);
