import { Router } from 'express';
import processController from '../controllers/processController';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import processSchema from '../schemas/processSchema';

const processRouter = Router();

processRouter.get('/processes', processController.find);
processRouter.get('/processes/sum', processController.sumValues);
processRouter.get('/processes/average', processController.averageValues);
processRouter.post(
  '/processes',
  validateSchemaMiddleware(processSchema),
  processController.create
);

export default processRouter;
