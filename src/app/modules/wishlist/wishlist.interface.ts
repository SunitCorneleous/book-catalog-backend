import { Model, Types } from 'mongoose';
import { IBook } from '../books/books.interface';
import { IUser } from '../user/user.interface';

export type IWishList = {
  userId: Types.ObjectId | IUser;
  wishList: Types.ObjectId[] | IBook[];
};

export type IWishtListModel = Model<IWishList, object>;
