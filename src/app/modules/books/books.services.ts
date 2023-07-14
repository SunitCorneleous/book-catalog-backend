import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
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

const updateBookInDB = async (
  id: string,
  bookData: Partial<IBook>
): Promise<IBook | null> => {
  const isBookExists = await Book.findOne({
    _id: id,
  });

  if (!isBookExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cow does not exists!');
  }

  const result = await Book.findOneAndUpdate({ _id: id }, bookData, {
    new: true,
  });

  return result;
};

export const BookServices = {
  createNewBookToDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookInDB,
};
