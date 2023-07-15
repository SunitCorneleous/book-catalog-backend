import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

const signUpUserToDB = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);

  return result;
};

export const AuthServices = {
  signUpUserToDB,
};
