import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
const app: Application = express();

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: add all routes here
app.use('/api/v1/', (req, res) => {
  res.send({ message: 'api is working' });
});

// ** for testing home rote
app.get('/', (req: Request, res: Response) => {
  res.send('this is home route 🏠');
});

// not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found!',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });

  next();
});

// TODO: add middleware here

export default app;
