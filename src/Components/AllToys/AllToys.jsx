import SingleToy from "./SingleToy";
import { Select, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { BiSearch } from 'react-icons/bi';



const AllToys = () => {
    const [addedToys, setAddedToys] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const [dataLimit, setDataLimit] = useState('20')

    useEffect(()=>{
        fetch(`http://localhost:9999/insertItem/${dataLimit}`)
        .then(res =>res.json())
        .then(data => setAddedToys(data))
    },[addedToys])

    const openSearch = () => setIsOpen(!isOpen)
    // Filter toys based on search query
    const filteredToys = addedToys.filter(toy => toy.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // Update the search query
    const handleSearch = event => {
        setSearchQuery(event.target.value);
    };
    const handleLimit = (e) => {
        const selectedLimit = e.target.value;
        setDataLimit(selectedLimit);
        // Update the data limit or perform any other actions based on the selected limit
      };
    return (
        <div className="w-10/12 mx-auto">
            <div className="bg-white cursor-pointer flex justify-center items-center p-4">
                {
                    isOpen &&
                    <input className="rounded" type="text" placeholder="Search by toy name" value={searchQuery} onChange={handleSearch} />
                }
                <BiSearch onClick={openSearch} className="text-2xl" />

                <Select onClick={handleLimit}>
                    <option>
                     All
                    </option>
                    <option>
                     10
                    </option>
                    <option>
                     20
                    </option>
                    <option>
                     5
                    </option>
                </Select>

            </div>
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