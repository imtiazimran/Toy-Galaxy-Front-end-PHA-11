
import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";
import { Table } from "flowbite-react";


const AllToys = () => {

    const addedToys = useLoaderData()

    return (
        <div className="w-10/12 mx-auto">
            <Table striped={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Seller
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Toy
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Stock
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Details
                    </Table.HeadCell>
                </Table.Head>
                {
                    addedToys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
                }
            </Table>
        </div>
    );
};

export default AllToys;