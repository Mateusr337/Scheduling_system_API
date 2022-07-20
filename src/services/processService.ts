import processRepository from '../repositories/processRepository';
import applyProcessesFilters from '../utils/applyProcessesFilter';

function sumValues(active: boolean | undefined) {
  let processes = processRepository.findAll();

  if (active !== undefined)
    processes = applyProcessesFilters({ processes, active });

  return processes.reduce((sum, process) => (sum += process.value), 0);
}

function averageValues(
  state: string | undefined,
  clientName: string | undefined
) {
  let processes = processRepository.findAll();
  processes = applyProcessesFilters({ processes, clientName, state });

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
  clientName: string,
  number: string
) {
  let processes = processRepository.findAll();
  processes = applyProcessesFilters({
    processes,
    minValue,
    maxValue,
    minDate,
    maxDate,
    clientName,
    state,
    number,
  });
  return processes;
}

export default {
  sumValues,
  averageValues,
  find,
};
