import fs from 'fs';
import path from 'path'
import pool from '../db';
import { Client } from '../types';

export const getClientsFromDB = async (id?: string): Promise<Client[]> => {
  let query = `
    SELECT c.id, c.name, c.age, c.gender, i.company, i.email, i.phone, i.address
    FROM clients c
    LEFT JOIN client_info i ON c.id = i.client_id
  `;

  if (id) {
    query += ` WHERE c.id = '${id}'`;
  }
  const { rows } = await pool.query(query);
  return rows.reduce((clients: Client[], row: any) => {
    const existingClient = clients.find(client => client.id === row.id);

    if (existingClient) {
      existingClient.additionalInfo = {
        ...existingClient.additionalInfo,
        company: row.company || existingClient.additionalInfo.company,
        email: row.email || existingClient.additionalInfo.email,
        phone: row.phone || existingClient.additionalInfo.phone,
        address: row.address || existingClient.additionalInfo.address,
      };
    } else {
      clients.push({
        id: row.id,
        name: row.name,
        age: row.age,
        gender: row.gender,
        additionalInfo: {
          company: row.company,
          email: row.email,
          phone: row.phone,
          address: row.address,
        },
      });
    }

    return clients;
  }, []);
};

const dataPath = path.join(__dirname, 'data.json');
const data = fs.readFileSync(dataPath);
const clients: Client[] = JSON.parse(data.toString()).clients;

export const getClientsFromJSON = (id?: string): Client[] => {
    let filteredClients = clients;
    if (id) {
      filteredClients = clients.filter((client: Client) => client.id === id);
    }
  
    return filteredClients.map((client: Client) => ({
      id: client.id,
      name: client.name,
      age: client.age,
      gender: client.gender || client.additionalInfo.gender || '',
      additionalInfo: {
        company: client.additionalInfo.company,
        email: client.additionalInfo.email,
        phone: client.additionalInfo.phone,
        address: client.additionalInfo.address
      },
    }));
  }
