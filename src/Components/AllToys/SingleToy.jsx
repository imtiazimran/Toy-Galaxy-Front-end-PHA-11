import { Button, Table } from "flowbite-react";

const SingleToy = ({ toy }) => {

    const {
        name,
        sellerName,
        category,
        price,
        qty,
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
                    View Details
                </Button>
            </Table.Row>
        </Table.Body>
    );
};

export default SingleToy;