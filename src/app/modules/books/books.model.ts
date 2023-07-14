import { Schema, model } from 'mongoose';
import { IBook, IBookModel } from './books.interface';
import { IBookGenre } from './books.constants';

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      enum: IBookGenre,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    reviews: {
      type: Array,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook, IBookModel>('Book', bookSchema);
