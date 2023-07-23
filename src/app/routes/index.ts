import express from 'express';
import { BookRoutes } from '../modules/books/books.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ReviewRoutes } from '../modules/reviews/reviews.route';
import { WishListRoutes } from '../modules/wishlist/wishlist.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/user',
    route: AuthRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
  {
    path: '/wish-list',
    route: WishListRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
