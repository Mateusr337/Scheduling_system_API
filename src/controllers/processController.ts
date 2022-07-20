import { Request, Response } from 'express';
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

  const processes = processService.find(minValue, maxValue, minDate, maxDate);

  res.send(processes);
}

export default {
  sumValues,
  averageValues,
  find,
};
