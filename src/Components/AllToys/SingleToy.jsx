/* eslint-disable react/prop-types */
import { Button, Card, Rating, Table } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../Authorization/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SingleToy = ({ toy }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const from = useLocation()
    console.log(from)
    const [detailsData, setDetailsData] = useState({})

    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        if (user) {
            setModalOpen(!modalOpen);

            handleClick(_id)
        }
        else {
            toast.error("Please Log In To See Details, I am Takeing you to Login", {
                position: toast.POSITION.TOP_CENTER
            });
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        }

    };

    const closeModal = () => {
        setModalOpen(false);
    };


    let {
        name,
        sellerName,
        category,
        price,
        qty,
        _id
    } = toy
    const handleClick = (id) => {
        fetch(`http://localhost:9999/insertItem/${id}`)
            .then(res => res.json())
            .then(data => setDetailsData(data))
    }
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
                {modalOpen && (
                    <div onBlur={closeModal} className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <div className="px-6 py-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold p-3">Toy Details</h2>
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
                                <div className="max-w-sm">
                                    <Card
                                        imgAlt="Toy Photo"
                                        imgSrc={detailsData.photoLink && detailsData.photoLink}
                                    >

                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            Toy: {detailsData.name}
                                        </h5>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            Seller: {detailsData.sellerName}
                                        </h5>
                                        <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">
                                            Seller Email: {detailsData.sellarEmail}
                                        </h5>
                                        <p className="text-md  tracking-tight text-gray-900 dark:text-white">
                                            Details: {detailsData.details}
                                        </p>
                                        <div className="mt-2.5 mb-5 flex items-center">
                                            <Rating>
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star filled={false} />
                                                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                    {detailsData.rating}
                                                </p>
                                            </Rating>
                                        </div>
                                        <div className="flex items-center gap-3 justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                                $ {detailsData.price}
                                            </span>
                                            <p>
                                                Stock: <br /> {detailsData.qty}
                                            </p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                            <div className="px-6 py-4 bg-gray-100 dark:bg-gray-700 flex justify-start">
                                <Button onClick={closeModal} pill={true} gradientMonochrome="purple">
                                    Close
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