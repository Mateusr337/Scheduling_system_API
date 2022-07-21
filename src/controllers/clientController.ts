import { Request, Response } from 'express';
import ClientInsertData from '../Interfaces/clientInsertDataInterface';
import clientService from '../services/clientService';

function find(req: Request, res: Response) {
  const clients = clientService.find();
  res.send(clients).status(200);
}

function create(req: Request, res: Response) {
  const clients = clientService.create(req.body as ClientInsertData);
  res.send(clients).status(200);
}

export default {
  find,
  create,
};
