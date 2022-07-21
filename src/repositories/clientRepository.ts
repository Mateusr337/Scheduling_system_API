import clients from '../Database/clients';
import notFoundError from '../errors/notFoundError';

function findAll() {
  return clients;
}

function findByName(clientName: string) {
  return clients.find((client) => client.name === clientName);
}

function findByNameOrThrow(clientName: string) {
  const client = findByName(clientName);
  if (!client) throw notFoundError('client');

  return client;
}

export default {
  findAll,
  findByName,
  findByNameOrThrow,
};
