import cors from 'cors';
import express, { json } from 'express';
import appRouter from './Routes';
import 'express-async-errors';
import errorHandlingMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(json());
app.use(cors());
app.use(appRouter);
app.use(errorHandlingMiddleware);

export default app;
