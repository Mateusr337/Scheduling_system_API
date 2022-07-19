import { Request, Response } from 'express';
import processService from '../services/processService';

function sumAllValues(req: Request, res: Response) {
  const { active } = req.query;
  const sumProcesses = processService.sumAllValues(active as string);

  res.send({ sum: sumProcesses }).status(200);
}

export default {
  sumAllValues,
};
