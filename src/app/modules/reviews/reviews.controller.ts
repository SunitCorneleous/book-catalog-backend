import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IReview } from './reviews.interface';
import { reviewServices } from './reviews.services';
import { Request, Response } from 'express';

const createReview = catchAsync(async (req: Request, res: Response) => {
  const reviewData = req.body;

  const result = await reviewServices.createNewReviewToDB(reviewData);

  sendResponse<IReview>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review posted successfully',
    data: result,
  });
});

export const reviewController = {
  createReview,
};
