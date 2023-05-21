import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authorization/AuthProvider";
import { Button, Spinner, Table } from "flowbite-react";
import Swal from "sweetalert2";
import UpdateToy from "./UpdateToy";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user, isLoading } = useContext(AuthContext);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedToy, setSelectedToy] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:9999/myToys?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setMyToys(data))
                .catch((error) => {
                    console.error("Error fetching toys:", error);
                    setMyToys([]);
                });
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:9999/insertItem/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const itemsAfterDelete = myToys.filter(toy => toy._id !== id);
                            setMyToys(itemsAfterDelete);
                        }
                    });

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }
        });
    };

    const handleUpdate = (id) => {
        // Find the toy with the given ID
        const toyToUpdate = myToys.find((toy) => toy._id === id);

        setSelectedToy(toyToUpdate);
        setEditModalOpen(true);
    };

    const closeModal = () => {
        setEditModalOpen(false);
    };

    return (
        <div className="w-10/12 mx-auto mt-4">
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Seller
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Edit
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y mx-auto">
                    {
                        isLoading ? <div className="text-center w-full flex justify-center">
                        <img src="https://cdn.dribbble.com/users/1961926/screenshots/5660764/flash.gif" alt="" />
                        </div>
                            : myToys.map((toy) => (
                                <Table.Row key={toy._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {toy.name}
                                    </Table.Cell>
                                    <Table.Cell>{toy.sellerName}</Table.Cell>
                                    <Table.Cell>{toy.category}</Table.Cell>
                                    <Table.Cell>${toy.price}</Table.Cell>
                                    <Table.Cell className="flex gap-3">
                                        <button onClick={() => handleUpdate(toy._id)} className="font-semibold text-blue-600"> Edit </button>
                                        <Button
                                            onClick={() => handleDelete(toy._id)}
                                            outline={true}
                                            gradientDuoTone="pinkToOrange"
                                        >
                                            X
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                    }
                </Table.Body>
            </Table>
            {selectedToy && (
                <UpdateToy
                    setMyToys={setMyToys}
                    myToys={myToys}
                    editModalOpen={editModalOpen}
                    toy={selectedToy}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default MyToys;
