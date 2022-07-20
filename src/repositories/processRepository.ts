import { valueToString } from './../../node_modules/@sinonjs/commons/types/index.d';
import processes from '../Database/processes';
import Process from '../Interfaces/processInterface';

function findAll() {
  return processes;
}

function findByActive(
  activeFilter: string,
  processesList = processes as Array<Process>
) {
  return processesList.filter(
    (process) => process.active.toString() === activeFilter
  );
}

export default {
  findByActive,
  findAll,
};
