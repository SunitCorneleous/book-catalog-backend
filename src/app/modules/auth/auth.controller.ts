import httpStatus from 'http-status';
import { AuthServices } from './auth.services';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from '../user/user.interface';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import config from '../../../config';
import { IGenericLoginResponse } from '../../../interface/common';

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

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const loginData = req.body;

  const { refreshToken, ...others } = await AuthServices.logInUserFromDB(
    loginData
  );

  //set refresh token into browser cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<IGenericLoginResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: others,
  });
});

export const AuthController = {
  signUpUser,
  loginUser,
};
