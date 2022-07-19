import { Router } from 'express';
import processController from '../controllers/processController';

const processRouter = Router();

processRouter.get('/processes/sum', processController.sumAllValues);

export default processRouter;
