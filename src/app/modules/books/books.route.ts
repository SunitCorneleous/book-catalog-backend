import express from 'express';
import { BookController } from './books.controller';

const router = express.Router();

router.post('/add-book', BookController.createBook);

router.get('/', BookController.getBooks);

router.get('/:id', BookController.getSingleBook);

router.patch('/:id', BookController.updateBook);

router.delete('/:id', BookController.deleteBook);

export const BookRoutes = router;
