

import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      age
      gender
      additionalInfo {
        company
        address
        phone
        email
      }
    }
  }
`;
