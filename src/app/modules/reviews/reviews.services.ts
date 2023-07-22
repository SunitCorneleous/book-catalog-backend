import { IReview } from './reviews.interface';
import { Review } from './reviews.model';

const createNewReviewToDB = async (payload: IReview) => {
  const result = await Review.create(payload);

  return result;
};

export const reviewServices = {
  createNewReviewToDB,
};
