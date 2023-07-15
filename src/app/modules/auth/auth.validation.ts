import { z } from 'zod';

const signupUserZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({
        required_error: 'First Name is requred',
      }),
      lastName: z.string({
        required_error: 'Last Name is requred',
      }),
    }),
    email: z.string({ required_error: 'Email is required to login' }),
    password: z.string({ required_error: 'Password is required to login' }),
  }),
});

const loginUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required to login',
    }),
    password: z.string({ required_error: 'Password is required to login' }),
  }),
});

export const AuthValidation = {
  signupUserZodSchema,
  loginUserZodSchema
};
