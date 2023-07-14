import { ErrorRequestHandler } from 'express';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { ZodError } from 'zod';
import validationErrorHandler from '../../errors/validationErrorHandler';
import zodErrorHandler from '../../errors/zodErrorHandler';
import castErrorHandler from '../../errors/castErrorHandler';
import { IGenericErrorMessage } from '../../interface/error';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log('❌ globalErrorHandler ~', error);

  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorMessages: IGenericErrorMessage[] = [];

  // check if Validation Error
  if (error?.name === 'ValidationError') {
    const simplifiedError = validationErrorHandler(error);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  // handle cast error
  else if (error?.name === 'CastError') {
    const simplifiedError = castErrorHandler(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  // handle zod error
  else if (error instanceof ZodError) {
    const simplifiedError = zodErrorHandler(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  // check if the error is an instance of Api Error
  else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }
  // check if the error is an instance of Error
  else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage: errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;
