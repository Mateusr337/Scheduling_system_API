import { Router } from 'express';
import processController from '../controllers/processController';

const processRouter = Router();

processRouter.get('/processes/sum', processController.sumValues);
processRouter.get('/processes/average', processController.averageValues);

export default processRouter;
