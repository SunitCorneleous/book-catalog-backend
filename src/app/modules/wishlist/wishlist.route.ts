import express from 'express';
import auth from '../../middlewares/auth';
import { WishListController } from './wishtlist.controller';

const router = express.Router();

router.patch('/:id', auth(), WishListController.addWishList);

export const WishListRoutes = router;
