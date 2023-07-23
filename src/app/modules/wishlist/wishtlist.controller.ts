import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IWishList } from './wishlist.interface';
import { wishListServices } from './wishlist.services';
import httpStatus from 'http-status';

const addWishList = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.body;
  const { id } = req.params;

  const result = await wishListServices.addBookToWishList(bookId, id);

  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added to wishlist successfully',
    data: result,
  });
});

export const WishListController = {
  addWishList,
};
