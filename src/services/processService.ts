import notFoundError from '../errors/notFoundError';
import Process from '../Interfaces/processInterface';
import processRepository from '../repositories/processRepository';
import clientService from './clientService';

function sumValues(active: boolean | undefined) {
  let processes = processRepository.findAll();

  if (active !== undefined)
    processes = processes.filter((process) => process.active === active);

  return processes.reduce((sum, process) => (sum += process.value), 0);
}

function averageValues(
  state: string | undefined,
  clientName: string | undefined
) {
  let processes = processRepository.findAll();

  if (state) processes = processes.filter((process) => process.state === state);

  if (clientName) {
    const client = clientService.findByName(clientName);
    processes = processes.filter((process) => process.clientId === client.id);
  }

  return (
    processes.reduce((sum, process) => (sum += process.value), 0) /
    processes.length
  );
}

function find(
  minValue: number,
  maxValue: number,
  minDate: string,
  maxDate: string
) {
  let processes = processRepository.findAll();
  processes = applyFilters(processes, minValue, maxValue, minDate, maxDate);
  return processes;
}

function applyFilters(
  processes: Array<Process>,
  minValue: number,
  maxValue: number,
  minDate: string,
  maxDate: string
) {
  if (minValue)
    processes = processes.filter((process) => process.value >= minValue);
  if (maxValue)
    processes = processes.filter((process) => process.value <= maxValue);
  if (minDate)
    processes = processes.filter((process) => process.initialDate >= minDate);
  if (maxDate)
    processes = processes.filter((process) => process.initialDate >= maxDate);

  return processes;
}

export default {
  sumValues,
  averageValues,
  find,
};
