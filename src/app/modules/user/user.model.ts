/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './user.interface';
import config from '../../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
  {
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
  },

  {
    timestamps: true,
  }
);

//hash password
userSchema.pre('save', async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );

  next();
});

// static method to check if user exists
/* userSchema.static(
  'isUserExists',
  async function isUserExists(phoneNumber: string) {
    return await User.findOne(
      {
        phoneNumber,
      },
      {
        phoneNumber: 1,
        password: 1,
        role: 1,
      }
    );
  }
); */

// static method to check if password match
/* userSchema.static(
  'isPasswordMatched',
  async function isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ) {
    return await bcrypt.compare(givenPassword, savedPassword);
  }
); */

export const User = model<IUser, IUserModel>('User', userSchema);
