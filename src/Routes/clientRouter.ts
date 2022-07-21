import { Router } from 'express';
import clientController from '../controllers/clientController';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import clientSchema from '../schemas/clientSchema';

const clientRouter = Router();

clientRouter.get('/clients', clientController.find);
clientRouter.post(
  '/clients',
  validateSchemaMiddleware(clientSchema),
  clientController.create
);

export default clientRouter;
