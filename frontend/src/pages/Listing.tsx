import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_CLIENTS } from '../querey';
import { Client } from '../type';

const Listing: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  
  if (loading) return <p>...loading</p>
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.clients) {
    return <p>No clients found</p>;
  }
  
  return (
    <div classname = "list">
      <h1>Client List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        
        <tbody>
          {data.clients.map((client: Client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td><Link to={`/details/${client.id}`}>{client.name}</Link></td>
              <td>{client.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listing;
