import { Schema, model } from 'mongoose';
import { IReview, IReviewModel } from './reviews.interface';

const reviewSchema = new Schema<IReview>(
  {
    review: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Review = model<IReview, IReviewModel>('Review', reviewSchema);
