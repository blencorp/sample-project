import { useSearchParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Loader2 } from 'lucide-react';

export const Icons = {
  spinner: Loader2,
};

export const Details = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const GET_SPECIFIC_CLIENT = gql`
    query getClient($id: ID!) {
        getClient(id: $id) {
          id
          name
          gender
          age
          additionalInfo {
            address
            company
            email
            phone
          }
        }
    }`;

  const { data, loading, error } = useQuery(GET_SPECIFIC_CLIENT, {
    variables: { id: id }
  });

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center mt-[3rem]">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  const client = data?.getClient;

  return (
    <div className="flex flex-col justify-center mt-[2rem]">
      {!loading ? (
        <>
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight my-[8px]">
            Details Page
          </h1>
          <div key={client.id}>
            <p className="font-bold">Name: <span className="font-normal">{client.name}</span></p>
            <p className="font-bold">Gender: <span className="font-normal">{client.gender}</span></p>
            <p className="font-bold">Age: <span className="font-normal">{client.age}</span></p>
            <br />
            <p className="font-bold">Company: <span className="font-normal">{client.additionalInfo.company}</span></p>
            <br />
            <p className="font-bold">Email: <span className="font-normal">{client.additionalInfo.email}</span></p>
            <p className="font-bold">Address: <span className="font-normal">{client.additionalInfo.address}</span></p>
            <p className="font-bold">Phone: <span className="font-normal">{client.additionalInfo.phone}</span></p>
          </div>
        </>
      ) : <Icons.spinner className="h-4 w-4 animate-spin" />}
    </div>
  );
};
