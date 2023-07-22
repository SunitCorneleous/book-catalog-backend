import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { IBook } from '../books/books.interface';

export type IReview = {
  review: string;
  userId: Types.ObjectId | IUser;
  bookId: Types.ObjectId | IBook;
};

export type IReviewModel = Model<IReview, object>;
