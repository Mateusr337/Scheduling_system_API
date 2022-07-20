import notFoundError from '../errors/notFoundError';
import ProcessesFilter from '../Interfaces/processFilterInterface';
import Process from '../Interfaces/processInterface';
import processRepository from '../repositories/processRepository';
import clientService from './clientService';

function sumValues(active: boolean | undefined) {
  let processes = processRepository.findAll();

  if (active !== undefined) processes = applyFilters({ processes, active });

  return processes.reduce((sum, process) => (sum += process.value), 0);
}

function averageValues(
  state: string | undefined,
  clientName: string | undefined
) {
  let processes = processRepository.findAll();
  processes = applyFilters({ processes, clientName, state });

  return (
    processes.reduce((sum, process) => (sum += process.value), 0) /
    processes.length
  );
}

function find(
  minValue: number,
  maxValue: number,
  minDate: string,
  maxDate: string,
  state: string,
  clientName: string
) {
  let processes = processRepository.findAll();
  processes = applyFilters({
    processes,
    minValue,
    maxValue,
    minDate,
    maxDate,
    clientName,
    state,
  });
  return processes;
}

function applyFilters({
  processes,
  minValue,
  maxValue,
  minDate,
  maxDate,
  clientName,
  state,
  active,
}: ProcessesFilter) {
  if (minValue)
    processes = processes.filter((process) => process.value >= minValue);

  if (maxValue)
    processes = processes.filter((process) => process.value <= maxValue);

  if (minDate)
    processes = processes.filter((process) => process.initialDate >= minDate);

  if (maxDate)
    processes = processes.filter((process) => process.initialDate >= maxDate);

  if (state) processes = processes.filter((process) => process.state === state);

  if (clientName) {
    const client = clientService.findByName(clientName);
    processes = processes.filter((process) => process.clientId === client.id);
  }

  if (active !== undefined)
    processes = processes.filter((process) => process.active === active);

  return processes;
}

export default {
  sumValues,
  averageValues,
  find,
};
