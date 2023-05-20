/* eslint-disable react/prop-types */
import { Button, Table } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen(!modalOpen);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const {
        name,
        sellerName,
        category,
        price,
        qty,
        _id
    } = toy
    return (
        <>
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
                    <Button onClick={toggleModal} pill={true} gradientMonochrome="purple">
                    view details
                    </Button>
                    </Table.Row>
                    </Table.Body>
                    <>
                    <Link to={`/toyDetails/${_id}`}>View Details</Link>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Modal Title</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam vel justo ultrices blandit vel in purus. Sed semper feugiat lobortis.
                </p>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-100 dark:bg-gray-700 flex justify-end">
              <Button onClick={closeModal} className="mr-2">
                Cancel
              </Button>
              <Button pill={true} gradientMonochrome="purple">
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
        </>

    );
};

export default SingleToy;