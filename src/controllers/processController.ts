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

export default {
  sumValues,
  averageValues,
};
