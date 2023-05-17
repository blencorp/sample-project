import { getClientsFromDB, getClientsFromJSON } from './client';
import { Client } from '../types';

const getClients = async (id?: string): Promise<Client[]> => {
  try {
    return await getClientsFromDB(id);
  } catch (error) {
    console.error(`Error retrieving clients from database: ${error}`);
    return getClientsFromJSON(id);
  }
};

export default getClients;