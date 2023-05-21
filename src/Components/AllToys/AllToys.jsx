
import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";
import { Table } from "flowbite-react";
import { useState } from "react";


const AllToys = () => {
    const addedToys = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    // Filter toys based on search query
    const filteredToys = addedToys.filter(toy => toy.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // Update the search query
    const handleSearch = event => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className="w-10/12 mx-auto">
            <input type="text" placeholder="Search by toy name" value={searchQuery} onChange={handleSearch} />
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
                    filteredToys.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
                }
            </Table>
        </div>
    );
};

export default AllToys;