"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
  type Query {
    clients: [Client]
  }

  type Client {
    id: String
    name: String
    age: Int
    gender: String
    additionalInfo: AdditionalInfo
  }

  type AdditionalInfo {
    company: String
    email: String
    phone: String
    address: String
  }
`;
