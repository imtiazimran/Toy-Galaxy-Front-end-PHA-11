import { Avatar, Button, Checkbox, Table } from 'flowbite-react';
import React from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import useCartGet from '../../CustomHook/useCartGet';
import Swal from 'sweetalert2';
import axios from 'axios';

const ViewCart = () => {

    const { cart, loading } = useCartGet()

    const handleDelete = (item) => {
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
                axios.delete(`https://toy-market-server-jvo2uifn4-toygalaxy.vercel.app/cart/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                    });


            }
        });
    };

    return (
        <div>
            {
                cart.length === 0 ? <div className="text-center w-full flex justify-center py-5 bg-white">
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="" />
                </div>
                    :
                    <div className="overflow-x-auto">
                        {
                            loading ? <div className="text-center w-full flex justify-center">
                                <img src="https://cdn.dribbble.com/users/1961926/screenshots/5660764/flash.gif" alt="" />
                            </div>
                                :
                                <Table className='table-auto' hoverable>
                                    <Table.Head>
                                        <Table.HeadCell className="p-4">
                                            <Checkbox />
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Quantity
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Price
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Action
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        {
                                            cart?.map(item => (
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="p-4">
                                                        <Avatar img={item.image || item.picture} />
                                                    </Table.Cell>
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        {item.name || item.toy_name}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {item.qty}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        ${item.price}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Button onClick={() => handleDelete(item)} gradientMonochrome="failure">
                                                            <BiTrashAlt />
                                                        </Button>
                                                    </Table.Cell>
                                                </Table.Row>
                                            ))
                                        }
                                    </Table.Body>
                                </Table>
                        }
                    </div>
            }
        </div>
    );
};

export default ViewCart;