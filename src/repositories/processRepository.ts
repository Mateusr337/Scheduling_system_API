import processes from '../Database/processes';
import Process from '../Interfaces/processInterface';

function findAll() {
  return processes;
}

function create(process: Process) {
  processes.push(process);
  return processes;
}

export default {
  findAll,
  create,
};
