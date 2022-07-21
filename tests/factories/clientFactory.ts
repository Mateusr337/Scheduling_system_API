import clients from '../../src/Database/clients';
import ClientInsertData from '../../src/Interfaces/clientInsertDataInterface';
import Client from '../../src/Interfaces/clientInterface';

function insertClientData(): ClientInsertData {
  return {
    name: 'empresa x',
    CNPJ: '12345678910',
    state: 'RS',
  };
}

function createClient() {
  const client = insertClientData();
  clients.push({ ...client, id: 1 });

  return clients[0];
}

export default {
  insertClientData,
  createClient,
};
