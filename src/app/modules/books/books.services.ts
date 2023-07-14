import { IBook } from './books.interface';
import { Book } from './books.model';

const createNewBookToDB = async (bookData: IBook): Promise<IBook> => {
  const result = await Book.create(bookData);

  return result;
};

export const BookServices = {
  createNewBookToDB,
};
