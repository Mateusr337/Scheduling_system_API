import Process from './processInterface';

export default interface ProcessesFilter {
  processes: Array<Process>;
  minValue?: number;
  maxValue?: number;
  minDate?: string;
  maxDate?: string;
  clientName?: string;
  state?: string;
  active?: boolean;
}
