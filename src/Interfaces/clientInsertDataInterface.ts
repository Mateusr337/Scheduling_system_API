import Client from './clientInterface';

type ClientInsertData = Omit<Client, 'id'>;

export default ClientInsertData;
