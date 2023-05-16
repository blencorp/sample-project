import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
  } from 'graphql';
import {getClients} from './resolvers'
import {Client } from './types'



const AdditionalInfoType = new GraphQLObjectType({
  name: 'AdditionalInfo',
  fields: {
      company: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      address: { type: GraphQLString },
  },
});

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      gender: { type: GraphQLString },
      additionalInfo: { type: AdditionalInfoType },
  },
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
      clients: {
          type: new GraphQLList(ClientType),
          resolve: (): Client[] => getClients()
      },
  },
});

const schema = new GraphQLSchema({ query: QueryType });

export default schema