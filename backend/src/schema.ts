import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    clients: [Client]
  }

  type Client {
    id: ID!
    name: String!
    age: Int!
    gender: String!
    additionalInfo: AdditionalInfo
  }

  type AdditionalInfo {
    company: String!
    email: String!
    phone: String!
    address: String!
  }
`;
