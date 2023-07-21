import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import auth from '../../middlewares/auth';

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

router.get('/login-with-token', auth(), AuthController.logInUsingAccessToken);

export const AuthRoutes = router;
