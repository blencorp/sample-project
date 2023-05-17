import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setClient } from '../store/clientSlice';
import ErrorComponent  from '../components/Error'

interface Client {
  id: string;
  name: string;
  age: number;
  gender: string;
  additionalInfo: {
    company: string;
    email: string;
    phone: string;
    address: string;
  };
}

interface ClientData {
  client: Client;
}

interface ClientVars {
  id: string;
}

const GET_CLIENTS = gql`
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

const Details = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery<ClientData, ClientVars>(GET_CLIENTS, {
    variables: { id: String(id) },
  });

  if (data && data.client) {
    dispatch(setClient(data.client));
  }

  const client = useSelector((state: any) => state.client.clients[0]) as Client;

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorComponent errorMessage={error.message}/>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">{client.name} Details</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            ID
          </label>
          <p className="text-gray-700">{client.id}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <p className="text-gray-700">{client.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Age
          </label>
          <p className="text-gray-700">{client.age}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Gender
          </label>
          <p className="text-gray-700">{client.gender}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
            Company
          </label>
          <p className="text-gray-700">{client.additionalInfo.company}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <p className="text-gray-700">{client.additionalInfo.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <p className="text-gray-700">{client.additionalInfo.phone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Address
          </label>
          <p className="text-gray-700">{client.additionalInfo.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;