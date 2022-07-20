import notFoundError from '../errors/notFoundError';
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

export default {
  sumValues,
  averageValues,
};
