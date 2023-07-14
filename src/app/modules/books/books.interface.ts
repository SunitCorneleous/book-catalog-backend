import { Model } from 'mongoose';

export type IGenre =
  | 'Action and Adventure'
  | 'Biography'
  | 'Children'
  | 'Comics and Graphic Novels'
  | 'Crime and Detective'
  | 'Drama'
  | 'Fantasy'
  | 'Historical Fiction'
  | 'Horror'
  | 'Humor'
  | 'Mystery'
  | 'Romance'
  | 'Science Fiction'
  | 'Self-Help'
  | 'Thriller';

export type IBook = {
  title: string;
  author: string;
  genre: IGenre;
  publicationDate: string;
  image?: string;
  reviews?: string[];
};

export type IBookModel = Model<IBook, object>;
