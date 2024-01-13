import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ClientContext } from "@/lib/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface AdditionalInfo {
    __typename: "AdditionalInfo";
    company: string;
    email: string;
    phone: string;
    address: string;
}

interface Client {
    __typename: "Client";
    id: string;
    name: string;
    gender: string | null;
    age: number;
    additionalInfo: AdditionalInfo;
}

type Clients = Client[];

export const Listing = () => {

    const data: Clients = useContext(ClientContext)!

    return (
        <div className="flex flex-col justify-center mt-[2rem]">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight my-[8px]">
                Listings page
            </h1>
            <div className="flex flex-col gap-3 pt-4">
                <Table>
                    <TableCaption>Client Lists</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Gender</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((info, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    <Link to={`/details?id=${info?.id}`}>
                                        <p className="cursor-pointer hover:underline">{info?.name}</p>
                                    </Link>
                                </TableCell>
                                <TableCell>{info?.age}</TableCell>
                                <TableCell>{info?.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}