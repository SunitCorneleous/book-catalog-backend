import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { IBook } from './books.interface';
import { BookServices } from './books.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const bookData = req.body;

  const result = await BookServices.createNewBookToDB(bookData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added successfully',
    data: result,
  });
});

const getBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookServices.getAllBooksFromDB();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Books retrived successfully',
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookServices.getSingleBookFromDB(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Books retrived successfully',
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const bookData = req.body;
  const result = await BookServices.updateBookInDB(id, bookData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
};
