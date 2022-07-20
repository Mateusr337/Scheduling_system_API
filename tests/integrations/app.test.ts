import supertest from 'supertest';
import app from '../../src/app';
import processes from '../../src/Database/processes';

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
    const min = 10000000;

    const response = await agent.get(`/processes?minValue=${min}`);

    expect(response.body.length).toEqual(2);
  });
});
