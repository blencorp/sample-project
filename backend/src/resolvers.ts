import { readFileSync } from 'fs';
import { resolve } from 'path';

const dataPath = resolve(__dirname, 'data.json');
const rawData = readFileSync(dataPath, 'utf-8');
const { clients } = JSON.parse(rawData);

export const resolvers = {
  Query: {
    clients: () => clients,
  },
};
