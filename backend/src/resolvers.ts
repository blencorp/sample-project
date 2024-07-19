const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data.json', 'utf8'));

export const resolvers = {
  Query: {
    clients: () => data.clients,
  },
};
