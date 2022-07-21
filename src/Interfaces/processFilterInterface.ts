export default interface ProcessesFilter {
  minValue?: number;
  maxValue?: number;
  minDate?: string;
  maxDate?: string;
  clientName?: string;
  state?: string;
  active?: boolean;
  number?: string;
}
