import ProcessInsertData from '../../src/Interfaces/processInsertDataInterface';

function insertProcessData(clientId: number): ProcessInsertData {
  return {
    active: true,
    type: 'CIVEL',
    state: 'RJ',
    value: 20000000,
    initialDate: '2007-10-10',
    clientId,
  };
}

export default {
  insertProcessData,
};
