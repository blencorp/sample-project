import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_CLIENTS } from '../querey';
import { Client } from '../type';
import './listing.css';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery(GET_CLIENTS);

  const client = data.clients.find((client: Client) => client.id === id);

  if (!client) return <p>Client not found</p>;

  return (
    <div className="list">
      <h1>Client Details</h1>
      <p>ID: {client.id}</p>
      <p>Name: {client.name}</p>
      <p>Age: {client.age}</p>
      <p>Gender: {client.gender}</p>
      {client.additionalInfo && (
        <div>
          <p>Address: {client.additionalInfo.address}</p>
          <p>Company: {client.additionalInfo.company}</p>
          <p>Email: {client.additionalInfo.email}</p>
          <p>Phone: {client.additionalInfo.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
