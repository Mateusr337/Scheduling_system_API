import Process from './processInterface';
import ProcessType from './processTypeInterface';

export default interface ProcessInsertData {
  id: number;
  active: boolean;
  type: ProcessType;
  state: string;
  value: number;
  initialDate: string;
  clientName: string;
}
