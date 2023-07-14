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

export const BookController = {
  createBook,
};
