import express from 'express';
import { BookController } from './books.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/add-book', auth(), BookController.createBook);

router.get('/', BookController.getBooks);

router.get('/:id', BookController.getSingleBook);

router.patch('/:id', auth(), BookController.updateBook);

router.delete('/:id', BookController.deleteBook);

export const BookRoutes = router;
