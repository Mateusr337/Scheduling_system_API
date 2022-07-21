import processesDatabase from '../Database/processes';
import ProcessesFilter from '../Interfaces/processFilterInterface';
import ProcessInsertData from '../Interfaces/processInsertDataInterface';
import ProcessType from '../Interfaces/processTypeInterface';
import processRepository from '../repositories/processRepository';
import applyProcessesFilters from '../utils/applyProcessesFilter';
import getNewId from '../utils/getNewId';
import clientService from './clientService';

function sumValues(filters: ProcessesFilter) {
  let processes = processRepository.findAll();

  processes = applyProcessesFilters(processes, filters);

  return processes.reduce((sum, process) => (sum += process.value), 0);
}

function averageValues(filters: ProcessesFilter) {
  let processes = processRepository.findAll();
  processes = applyProcessesFilters(processes, filters);

  return (
    processes.reduce((sum, process) => (sum += process.value), 0) /
    processes.length
  );
}

function find(filters?: ProcessesFilter) {
  let processes = processRepository.findAll();
  if (filters) processes = applyProcessesFilters(processes, filters);

  return processes;
}

function create(process: ProcessInsertData) {
  const newId = getNewId(processesDatabase);
  const client = clientService.findByIdOrThrow(process.clientId);
  const number = createNumber(process.type, process.state);

  return processRepository.create({
    ...process,
    id: newId,
    number,
    clientId: client.id,
  });
}

function createNumber(type: ProcessType, state: string) {
  const lastProcess = find().at(-1);
  let newNumber = lastProcess
    ? `${parseInt(lastProcess.number.slice(0, 5)) + 1}`
    : '00000';

  const length = newNumber.length;
  if (length < 5) newNumber = '0'.repeat(5 - length) + newNumber;

  return newNumber + type + state;
}

export default {
  sumValues,
  averageValues,
  find,
  create,
};
