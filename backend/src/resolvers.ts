import fs from 'fs';

interface AdditionalInfo {
    company: string;
    email: string;
    phone: string;
    address: string;
  }
  
  interface Client {
    id: string;
    name: string;
    age: number;
    gender?: string;
    additionalInfo: AdditionalInfo;
  }

const data = fs.readFileSync('data.json');
  const clients: Client[] = JSON.parse(data.toString()).clients;


const resolvers = {
    Query: {
      clients: () => {
        return clients.map(client => ({
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
      },
    },
  };
  
  export default resolvers