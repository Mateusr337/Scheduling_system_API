import supertest from 'supertest';
import app from '../../src/app';
import processes from '../../src/Database/processes';

const agent = supertest(app);

describe('test cases', () => {
  it('should answer with sum of processes active - 108.700.000 cents', async () => {
    const response = await agent.get('/processes/sum?active=true');
    expect(response.body.sum).toEqual(108700000);
  });

  it('should answer with average of state and client name - 11.000.000', async () => {
    const client = 'Empresa A';
    const state = 'RJ';

    const response = await agent.get(
      `/processes/average?state=${state}&clientName=${client}`
    );

    expect(response.body.average).toEqual(11000000);
  });
});
