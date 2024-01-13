// index.test.ts
import { ApolloServer, gql } from "@apollo/server";
import { createTestClient } from "@apollo/client/testing";
import { Sequelize } from "sequelize-mock";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
// Mock the database with Sequelize Mock
const sequelizeMock = new Sequelize();
// Mock your models here if necessary
// Example: const Client = sequelizeMock.define('Client', {/* mocked attributes */});
// Create an instance of ApolloServer for testing
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Provide any additional context or configuration needed
    context: () => ({
    // Mocked context
    }),
});
describe('GraphQL API Tests', () => {
    it('fetches all clients', async () => {
        const { query } = createTestClient(server);
        const GET_ALL_CLIENTS = gql `
      query GetAllClients {
        getAllClients {
          id
          name
          age
          gender
          additionalInfo {
            company
            email
            phone
            address
          }
        }
      }
    `;
        const response = await query({ query: GET_ALL_CLIENTS });
        expect(response.data).toBeDefined();
        expect(response.errors).toBeUndefined();
        // Add more assertions as needed, based on the expected structure of your data
    });
    // Add more tests for other queries, mutations, and error cases
});
