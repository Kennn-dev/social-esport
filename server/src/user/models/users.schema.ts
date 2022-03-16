import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

import { hash, compare } from 'bcrypt';
import { HASH } from 'src/constaints/hash';
export type UserDocument = User & Document;
@Schema()
export class User {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar: string;

  @Prop()
  backgroundImage: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<any>('save', function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt
  hash(user.password, HASH.SALTROUNDS, function (err, hash) {
    if (err) return next(err);
    // override the cleartext password with the hashed one
    user.password = hash;
    next();
  });
});

UserSchema.methods.comparePassword = function (incomingPassword, cb) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  compare(incomingPassword, user.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
