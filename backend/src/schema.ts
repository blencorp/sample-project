import "reflect-metadata";
import { buildSchema, ObjectType, Field, ID, Int, Resolver, Query, Arg } from 'type-graphql';
import getClients from './resolvers/index';
import { Client } from './types';

@ObjectType()
class AdditionalInfo {
  @Field(() => String)
  company!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  phone!: string;

  @Field(() => String)
  address!: string;
}

@ObjectType()
class ClientType {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => Int)
  age!: number;

  @Field(() => String)
  gender!: string;

  @Field(() => AdditionalInfo)
  additionalInfo!: AdditionalInfo;
}

@Resolver()
class ClientResolver {
  @Query(() => ClientType, { nullable: true })
  async client(@Arg('id', () => ID) id: string): Promise<Client> {
    const clients = await getClients(id);
    return clients[0];
  }

  @Query(() => [ClientType])
  async clients(@Arg('id', () => ID, { nullable: true }) id?: string): Promise<Client[]> {
    return await getClients(id);
  }
}

const schema = buildSchema({
  resolvers: [ClientResolver],
});

export default schema;