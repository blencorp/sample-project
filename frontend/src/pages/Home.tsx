import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setClients } from '../store/clientSlice';
import { Client, MultipleClientState } from '../types';

const GET_CLIENTS = gql`
  query GetClient {
    clients {
      id
      name
      age
    }
  }
`;

function Home() {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (data && data.clients) {
    dispatch(setClients(data.clients));
  }

  const clients = useSelector((state: MultipleClientState) => state.client.clients);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Listing</h1>
      <table className="w-full border border-gray-300 table-auto">
        <thead>
        <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Age</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: Client,) => (
            <tr
              key={client.id}
              className="hover:bg-gray-100 transition duration-300 px-4 py-2 cursor-pointer"
            >
              <td className="border-t border-gray-300">{client.id}</td>
              <td className="border-t border-gray-300 hover:underline">
                <Link to={`/details/${client.id}`}>{client.name}</Link>
              </td>
              <td className="border-t border-gray-300">{client.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;