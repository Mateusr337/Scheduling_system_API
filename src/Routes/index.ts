import { Router } from 'express';
import clientRouter from './clientRouter';
import processRouter from './processRouter';

const appRouter = Router();

appRouter.use(processRouter);
appRouter.use(clientRouter);

export default appRouter;
