import { Request, Response } from 'express';
import ProcessesFilter from '../Interfaces/processFilterInterface';
import ProcessInsertData from '../Interfaces/processInsertDataInterface';
import processService from '../services/processService';

function sumValues(req: Request, res: Response) {
  const filters = destructorQuery(req.query);
  const sum = processService.sumValues(filters);

  res.status(200).send({ sum });
}

function averageValues(req: Request, res: Response) {
  const filters = destructorQuery(req.query);
  const average = processService.averageValues(filters);

  res.status(200).send({ average });
}

function find(req: Request, res: Response) {
  const filters = destructorQuery(req.query);
  const processes = processService.find(filters);

  res.status(200).send(processes);
}

function create(req: Request, res: Response) {
  const process: ProcessInsertData = req.body;
  const processes = processService.create(process);

  res.status(201).send(processes);
}

function destructorQuery(filters: any): ProcessesFilter {
  const minValue = parseInt(filters.minValue);
  const maxValue = parseInt(filters.maxValue);
  const maxDate = filters.maxDate as string;
  const minDate = filters.minDate as string;
  const state = filters.state as string;
  const clientName = filters.clientName as string;
  const number = filters.number as string;

  let { active } = filters;
  if (active === 'true') active = true;
  if (active === 'false') active = false;

  return {
    minValue,
    maxValue,
    minDate,
    maxDate,
    state,
    clientName,
    number,
    active,
  };
}

export default {
  sumValues,
  averageValues,
  find,
  create,
};
