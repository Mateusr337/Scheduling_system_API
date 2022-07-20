import processes from '../Database/processes';
import Process from '../Interfaces/processInterface';
import processRepository from '../repositories/processRepository';

function sumAllValues(active: string) {
  let processes: Array<Process> = [];

  if (active !== undefined) processes = processRepository.findByActive(active);
  if (active === undefined) processes = processRepository.findAll();

  return processes.reduce((sum, process) => (sum += process.value), 0);
}

function averageByStateAndClient(state: string, client: string) {
  const processes = processRepository.findAll();
}

export default {
  sumAllValues,
};
