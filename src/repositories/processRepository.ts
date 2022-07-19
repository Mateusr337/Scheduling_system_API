import processes from '../Database/processes';

function findByActive(active: String) {
  return processes.filter((process) => process.active.toString() === active);
}

function findAll() {
  return processes;
}

export default {
  findByActive,
  findAll,
};
