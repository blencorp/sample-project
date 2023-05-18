import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv'
import schema from './schema';
import sequelize from './db';

sequelize.sync({ force: false })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error syncing database', err));

dotenv.config();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;


const startServer = async () => {
    const server = new ApolloServer({ schema: await schema });
    const { url } = await startStandaloneServer(server, {
        listen: { port },
    });
    console.log(`🚀  Server ready at: ${url}`);
}

startServer()
