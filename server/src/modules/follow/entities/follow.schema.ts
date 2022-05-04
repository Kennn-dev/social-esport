import { FOLLOW_STATUS } from './../../../constaints/follow';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/modules/user/models/users.schema';
import { TTimestamp } from 'src/types/common';

export type FollowDocument = Follow & Document & TTimestamp;
@Schema({ timestamps: true })
export class Follow {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: string | Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  followerId: string | Types.ObjectId;

  @Prop({ default: FOLLOW_STATUS.HOLD })
  status: number;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);
