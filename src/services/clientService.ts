import clientsDatabase from '../Database/clients';
import conflictRequestError from '../errors/conflictRequestError';
import notFoundError from '../errors/notFoundError';
import ClientInsertData from '../Interfaces/clientInsertDataInterface';
import clientRepository from '../repositories/clientRepository';
import getNewId from '../utils/getNewId';

function findByName(clientName: string) {
  return clientRepository.findByName(clientName.toLowerCase());
}

function findByNameOrThrow(clientName: string) {
  const client = findByName(clientName);
  if (!client) throw notFoundError('client');

  return client;
}

function find() {
  return clientRepository.findAll();
}

function create(clientData: ClientInsertData) {
  const newId = getNewId(clientsDatabase);
  validateCNPJ(clientData.CNPJ);

  return clientRepository.create({ ...clientData, id: newId });
}

function validateCNPJ(CNPJ: string) {
  const clients = clientRepository.findAll();

  const client = clients.find((client) => client.CNPJ === CNPJ);
  if (client) throw conflictRequestError('client');
}

export default {
  findByName,
  findByNameOrThrow,
  find,
  create,
};
