const typeDefs = `
  type Client {
    id: ID!
    name: String!
    age: Int!
    gender: String!
    additionalInfo: AdditionalInfo!
  }

  type AdditionalInfo {
    company: String!
    email: String!
    phone: String!
    address: String!
  }

  type Query {
    clients: [Client]
  }
`;


export default typeDefs