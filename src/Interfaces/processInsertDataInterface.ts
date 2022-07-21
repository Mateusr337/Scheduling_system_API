import Process from './processInterface';
import ProcessType from './processTypeInterface';

export default interface ProcessInsertData {
  active: boolean;
  type: ProcessType;
  state: string;
  value: number;
  initialDate: string;
  clientId: number;
}
