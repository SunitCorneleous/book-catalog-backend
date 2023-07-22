import express from 'express';
import auth from '../../middlewares/auth';
import { reviewController } from './reviews.controller';

const router = express.Router();

router.post('/', auth(), reviewController.createReview);

router.get('/:id', reviewController.getReview);

export const ReviewRoutes = router;
