import { gql, useQuery } from "@apollo/client";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { ClientContext } from "./lib/context";
import { Details } from "./pages/details";
import { Home } from './pages/home';
import { Listing } from './pages/listing';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'listing',
          element: <Listing />,
        },
        {
          path: "details",
          element: <Details />
        }
      ],
    },
  ]);

  const GET_CLIENTS = gql`
  query ClientQuery {
    getAllClients {
      id
      name
      gender
      age
      additionalInfo {
        company
        email
        phone
        address
      }
    }
  }
`;

  const { data } = useQuery(GET_CLIENTS);

  return (
    <ClientContext.Provider value={data?.getAllClients}>
      <RouterProvider router={router} />
    </ClientContext.Provider>
  );

}

export default App

const Root = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col m-[2rem] justify-center'>
        <nav className='flex gap-6'>
          <Link to="/">
          <p className="font-bold hover:underline">Home</p>
          </Link>
          <Link to="/listing">
          <p className="font-bold hover:underline">Listings</p>
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}