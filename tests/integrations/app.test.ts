import supertest from 'supertest';
import app from '../../src/app';
import clientsDatabase from '../../src/Database/clients';
import processesDatabase from '../../src/Database/processes';
import clientFactory from '../factories/clientFactory';

const agent = supertest(app);

describe('test cases', () => {
  it('should answer with sum of processes active - 1.087.000,00 cents', async () => {
    const response = await agent.get('/processes/sum?active=true');
    expect(response.body.sum).toEqual(108700000);
  });

  it('should answer with average of state and client name - 110.000,00', async () => {
    const client = 'Empresa A';
    const state = 'RJ';

    const response = await agent.get(
      `/processes/average?state=${state}&clientName=${client}`
    );

    expect(response.body.average).toEqual(11000000);
  });

  it('should answer with value processes bigger than 100.000,00', async () => {
    const min = 10000001;
    const response = await agent.get(`/processes?minValue=${min}`);
    expect(response.body).toHaveLength(2);
  });

  it('should answer with processes of date SET 2007', async () => {
    const minDate = '2007-9-1';
    const maxDate = '2007-9-31';

    const response = await agent.get(
      `/processes?minDate=${minDate}&maxDate=${maxDate}`
    );

    expect(response.body).toHaveLength(1);
    expect(response.body[0].number).toEqual('00010TRABAM');
  });

  it("should answer with processes of client 'Empresa A' in same state", async () => {
    const client = clientsDatabase.find(
      (client) => client.name === 'Empresa A'.toLowerCase()
    );

    const processesToValid = processesDatabase.filter(
      (process) =>
        process.number === '00004CIVELRJ' || process.number === '00001CIVELRJ'
    );

    const response = await agent.get(
      `/processes?state=${client?.state}&clientName=${client?.name}`
    );

    expect(response.body).toHaveLength(2);
    expect(response.body).toEqual(processesToValid);
  });

  it("should answer with processes of client 'Empresa B' in same state", async () => {
    const client = clientsDatabase.find(
      (client) => client.name === 'Empresa B'.toLowerCase()
    );

    const processesToValid = processesDatabase.filter(
      (process) =>
        process.number === '00008CIVELSP' || process.number === '00009CIVELSP'
    );

    const response = await agent.get(
      `/processes?state=${client?.state}&clientName=${client?.name}`
    );

    expect(response.body).toHaveLength(2);
    expect(response.body).toEqual(processesToValid);
  });

  it('should answer with processes with TRAB in the number', async () => {
    const partialNumber = 'TRAB';
    const processesToValid = processesDatabase.filter((process) =>
      process.number.includes(partialNumber)
    );

    const response = await agent.get(`/processes?number=${partialNumber}`);

    expect(response.body).toHaveLength(2);
    expect(response.body).toEqual(processesToValid);
  });
});

describe('complement tests in the application', () => {
  beforeEach(() => {
    clientsDatabase.splice(0);
    processesDatabase.splice(0);
  });

  describe('POST /client', () => {
    it('should answer with status code 200 and create client', async () => {
      const clientData = clientFactory.insertClientData();
      const lengthClients = clientsDatabase.length;

      const response = await agent.post('/clients').send(clientData);

      expect(response.status).toEqual(200);
      expect(clientsDatabase).toHaveLength(lengthClients + 1);
    });

    it('should answer with status code 409 and create one client', async () => {
      const clientData = clientFactory.insertClientData();
      const lengthClients = clientsDatabase.length;

      await agent.post('/clients').send(clientData);
      const response = await agent.post('/clients').send(clientData);

      expect(response.status).toEqual(409);
      expect(clientsDatabase).toHaveLength(lengthClients + 1);
    });
  });
});
