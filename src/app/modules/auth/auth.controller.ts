import httpStatus from 'http-status';
import { AuthServices } from './auth.services';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from '../user/user.interface';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';

const signUpUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;

  const result = await AuthServices.signUpUserToDB(userData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const AuthController = {
  signUpUser,
};
