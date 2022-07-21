import notFoundError from '../errors/notFoundError';
import clientRepository from '../repositories/clientRepository';

function findByName(clientName: string) {
  const client = clientRepository.findByName(clientName.toLowerCase());
  if (!client) throw notFoundError('client');

  return client;
}

export default {
  findByName,
};
