import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Sequelize } from "sequelize";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const sequelize = new Sequelize("client", "michaelshimeles", null, {
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
});

const postgresConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

// Postgres Connection
postgresConnection();

console.log("Server running on " + url);
