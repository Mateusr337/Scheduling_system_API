import Process from '../Interfaces/processInterface';
import processRepository from '../repositories/processRepository';

function sumAllValues(active: String) {
  let processes: Array<Process> = [];

  if (active) {
    processes = processRepository.findByActive(active);
  } else {
    processes = processRepository.findAll();
  }

  return processes.reduce((sum, process) => (sum += process.value), 0);
}

export default {
  sumAllValues,
};
