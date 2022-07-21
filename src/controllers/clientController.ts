import { Request, Response } from 'express';
import ClientInsertData from '../Interfaces/clientInsertDataInterface';
import clientService from '../services/clientService';

function find(req: Request, res: Response) {
  const clients = clientService.find();
  res.status(200).send(clients);
}

function create(req: Request, res: Response) {
  const clients = clientService.create(req.body as ClientInsertData);
  res.status(201).send(clients);
}

export default {
  find,
  create,
};
