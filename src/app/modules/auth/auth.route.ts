import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.signupUserZodSchema),
  AuthController.signUpUser
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginUserZodSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;
