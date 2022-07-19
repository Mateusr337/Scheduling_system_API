import cors from 'cors';
import express, { json } from 'express';
import appRouter from './Routes';

const app = express();

app.use(json());
app.use(cors());

app.use(appRouter);

export default app;
