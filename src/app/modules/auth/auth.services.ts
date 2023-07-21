import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import {
  IGenericLoginData,
  IGenericLoginResponse,
} from '../../../interface/common';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

const signUpUserToDB = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);

  return result;
};

const logInUserFromDB = async (
  payload: IGenericLoginData
): Promise<IGenericLoginResponse> => {
  const { email: userEmail, password } = payload;

  // check if user exists
  const isUserExists = await User.isUserExists(userEmail);

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exists');
  }

  // check if password match
  const passwordStatus = await User.isPasswordMatched(
    password,
    isUserExists.password as string
  );

  if (isUserExists.password && !passwordStatus) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password does not match.');
  }

  const { email, name, _id } = isUserExists;

  //create access token
  const accessToken = jwtHelpers.createToken(
    {
      _id,
      name,
      email,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  // refresh token
  const refreshToken = jwtHelpers.createToken(
    {
      _id,
      name,
      email,
    },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    user: {
      email,
      name,
      _id,
    },
  };
};

const logInUsingTokenFromDB = async (email: string) => {
  const result = await User.findOne(
    {
      email: email,
    },
    {
      name: 1,
      email: 1,
    }
  );

  return result;
};

export const AuthServices = {
  signUpUserToDB,
  logInUserFromDB,
  logInUsingTokenFromDB,
};
