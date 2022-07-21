import Process from './processInterface';

export default interface ProcessInsertData {
  id: number;
  active: boolean;
  type: ProcessType;
  state: string;
  value: number;
  initialDate: string;
  clientId: number;
}
