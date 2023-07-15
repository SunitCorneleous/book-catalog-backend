/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Model, Types } from 'mongoose';

type IName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  name: IName;
  email: string;
  password: string;
};

export interface IUserModel extends Model<IUser, object> {
  isUserExists(id: string): Promise<Partial<IUser> & { _id: Types.ObjectId }>;

  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
}
