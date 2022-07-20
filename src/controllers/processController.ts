import { Request, Response } from 'express';
import Process from '../Interfaces/processInterface';
import processService from '../services/processService';

function sumValues(req: Request, res: Response) {
  const { active } = req.query;

  let activeFilter;
  if (active === 'true') activeFilter = true;
  if (active === 'false') activeFilter = false;

  const sum = processService.sumValues(activeFilter);

  res.send({ sum }).status(200);
}

function averageValues(req: Request, res: Response) {
  const { state, clientName } = req.query;

  const average = processService.averageValues(
    state as string | undefined,
    clientName as string | undefined
  );

  res.send({ average }).status(200);
}

function find(req: Request, res: Response) {
  const minValue = parseInt(req.query.minValue as string);
  const maxValue = parseInt(req.query.maxValue as string);
  const maxDate = req.query.maxDate as string;
  const minDate = req.query.minDate as string;
  const state = req.query.state as string;
  const clientName = req.query.clientName as string;
  const number = req.query.number as string;

  const processes = processService.find(
    minValue,
    maxValue,
    minDate,
    maxDate,
    state,
    clientName,
    number
  );

  res.send(processes);
}

function create(req: Request, res: Response) {
  const process = req.body as Process;
  const processes = processService.create(process);
  res.send(processes);
}

export default {
  sumValues,
  averageValues,
  find,
  create,
};
