import clients from '../Database/clients';
import Client from '../Interfaces/clientInterface';

function findAll() {
  return clients;
}

function findByName(clientName: string) {
  return clients.find((client) => client.name === clientName);
}

function findById(clientId: number) {
  return clients.find((client) => client.id === clientId);
}

function create(client: Client) {
  clients.push(client);
  return clients;
}

export default {
  findAll,
  findByName,
  create,
  findById,
};
