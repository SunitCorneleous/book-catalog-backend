import { WishList } from './wishlist.model';

const addBookToWishList = async (bookId: string, userId: string) => {
  try {
    let wishList = await WishList.findOne({ userId: userId });

    // If the wish list doesn't exist, create a new one
    if (!wishList) {
      wishList = new WishList({
        userId,
        wishList: [bookId],
      });
    } else {
      // Add the bookId to the wishList array
      wishList.wishList.push(bookId);
    }

    // Save the updated wish list or the newly created one
    const updatedWishList = await wishList.save();

    return updatedWishList;
  } catch (error) {
    throw new Error(`Failed to add to wish list`);
  }
};

export const wishListServices = {
  addBookToWishList,
};
