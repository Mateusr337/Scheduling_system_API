import ProcessesFilter from '../Interfaces/processFilterInterface';
import clientService from '../services/clientService';

export default function applyProcessesFilters({
  processes,
  minValue,
  maxValue,
  minDate,
  maxDate,
  clientName,
  state,
  active,
  number,
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

  if (number)
    processes = processes.filter((process) =>
      process.number.includes(number.toLocaleUpperCase())
    );

  return processes;
}
