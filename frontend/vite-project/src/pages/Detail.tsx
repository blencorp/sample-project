import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_CLIENT = gql`
  query GetClient($id: ID!) {
    client(id: $id) {
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

const DetailPage: React.FC = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: clientId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { client } = data;

  return (
    <div>
      <h1>{client.name}</h1>
      <p>ID: {client.id}</p>
      <p>Age: {client.age}</p>
      <p>Gender: {client.gender}</p>
      <p>Company: {client.additionalInfo.company}</p>
      <p>Email: {client.additionalInfo.email}</p>
      <p>Phone: {client.additionalInfo.phone}</p>
      <p>Address: {client.additionalInfo.address}</p>
    </div>
  );
};

export default DetailPage;
