import clients from '../Database/clients';

function findAll() {
  return clients;
}

function findByName(clientName: string) {
  return clients.find((client) => client.name === clientName);
}

export default {
  findAll,
  findByName,
};
