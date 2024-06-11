"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const server = new apollo_server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
