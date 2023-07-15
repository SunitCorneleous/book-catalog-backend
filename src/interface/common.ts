export type IGenericLoginData = {
  email: string;
  password: string;
};

export type IGenericLoginResponse = {
  accessToken: string;
  refreshToken?: string;
};
