export default interface Process {
  id: number;
  active: boolean;
  number: string;
  state: string;
  value: number;
  initialDate: string;
  clientId: number;
}
