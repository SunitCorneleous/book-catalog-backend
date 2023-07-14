import { IBook } from './books.interface';
import { Book } from './books.model';

const createNewBookToDB = async (bookData: IBook): Promise<IBook> => {
  const result = await Book.create(bookData);

  return result;
};

const getAllBooksFromDB = async (): Promise<IBook[]> => {
  const result = await Book.find({});

  return result;
};

const getSingleBookFromDB = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);

  return result;
};

export const BookServices = {
  createNewBookToDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
};
