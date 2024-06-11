import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CLIENTS = gql`
  query GetClients {
    clients {
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

const ListingPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Clients</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client:any) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>
                <Link to={`/detail/${client.id}`}>{client.name}</Link>
              </td>
              <td>{client.age}</td>
              <td>{client.gender}</td>
              <td>{client.additionalInfo.company}</td>
              <td>{client.additionalInfo.email}</td>
              <td>{client.additionalInfo.phone}</td>
              <td>{client.additionalInfo.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingPage;
