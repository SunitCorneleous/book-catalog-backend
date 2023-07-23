import { Schema, model } from 'mongoose';
import { IWishList, IWishtListModel } from './wishlist.interface';

const wishListSchema = new Schema<IWishList>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    wishList: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const WishList = model<IWishList, IWishtListModel>(
  'WishList',
  wishListSchema
);
