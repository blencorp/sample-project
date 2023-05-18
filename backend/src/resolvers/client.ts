import fs from 'fs';
import path from 'path';
import { Client, ClientInstance } from '../types';
import { ClientModel, AdditionalInfoModel } from '../models';

const mapClient = (client: ClientInstance | Client): Client => {
  const { id, name, age, gender } = client;
  const { company = '', email = '', phone = '', address = '' } = client.additionalInfo ?? {};
  return {
    id,
    name,
    age,
    gender,
    additionalInfo: { company, email, phone, address },
  };
};

export const getClientsFromDB = async (id?: string): Promise<Client[]> => {
  const clients = await ClientModel.findAll({
    where: id ? { id } : undefined,
    include: [{ model: AdditionalInfoModel }],
  });

  return clients.map(mapClient);
};

const dataPath = path.join(__dirname, 'data.json');

export const getClientsFromJSON = async (id?: string): Promise<Client[]> => {
  const data = await fs.promises.readFile(dataPath);
  const clients: Client[] = JSON.parse(data.toString()).clients;

  let filteredClients = clients;
  if (id) {
    filteredClients = clients.filter((client: Client) => client.id === id);
  }

  return filteredClients.map(mapClient);
};

