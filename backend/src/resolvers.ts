import fs from 'fs';
import { Client } from './types'
import path from 'path'

const dataPath = path.join(__dirname, 'data.json');
const data = fs.readFileSync(dataPath);
const clients: Client[] = JSON.parse(data.toString()).clients;

export const getClients = (id?: string): Client[] => {
    let filteredClients = clients;
    if (id) {
      filteredClients = clients.filter((client: Client) => client.id === id);
    }
  
    return filteredClients.map((client: Client) => ({
      id: client.id,
      name: client.name,
      age: client.age,
      gender: client.gender,
      additionalInfo: {
        company: client.additionalInfo.company,
        email: client.additionalInfo.email,
        phone: client.additionalInfo.phone,
        address: client.additionalInfo.address,
      },
    }));
  }