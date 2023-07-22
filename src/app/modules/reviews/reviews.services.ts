import { IReview } from './reviews.interface';
import { Review } from './reviews.model';

const createNewReviewToDB = async (payload: IReview) => {
  const result = await Review.create(payload);

  return result;
};

const getReviewByIdFromDB = async (id: string) => {
  const result = await Review.find({ bookId: id });

  return result;
};

export const reviewServices = {
  createNewReviewToDB,
  getReviewByIdFromDB,
};
