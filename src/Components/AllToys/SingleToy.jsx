/* eslint-disable react/prop-types */
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {

    const {
        name,
        sellerName,
        category,
        price,
        qty,
        _id
    } = toy
    return (
        <Table.Body className="divide-y">

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {sellerName}
                </Table.Cell>
                <Table.Cell>
                    {name}
                </Table.Cell>
                <Table.Cell>
                    {category}
                </Table.Cell>
                <Table.Cell>
                    ${price}
                </Table.Cell>
                <Table.Cell>
                    {qty}
                </Table.Cell>
                <Button pill={true} gradientMonochrome="purple">
                    <Link to={`/toyDetails/${_id}`}>View Details</Link>
                </Button>
            </Table.Row>
        </Table.Body>
    );
};

export default SingleToy;